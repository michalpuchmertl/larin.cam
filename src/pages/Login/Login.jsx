import React, { useState, useEffect, useContext } from 'react';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../Register/schema.config';
import getFirebase from '../../utils/firebase';

import { UserContext } from '../../providers/UserContext';

import './login.scss'

function Register(props) {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const firebase = getFirebase();

  const formOptions = {
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  };

  const { handleSubmit, register } = useForm(formOptions);

  const [loading, setLoading] = useState(false);

  const prepareRequest = (formData) => {
    const { password, username } = formData;
    const reqData = {
      username,
      password,
    };

    makeRequest(reqData);
  };

  const makeRequest = async (reqData) => {
    setLoading(true);

    const { username, password } = reqData;

    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        setLoading(false);
        console.log(userCredential);
        const user = userCredential.user;
        userContext.setCurrentUser(user);
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [authentication, setAuthState] = useState({
    authenticated: false,
    initializing: true,
  });

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        console.log('USER', user);
        if (user) {
          setAuthState({
            authenticated: true,
            initializing: false,
          });
        } else {
          setAuthState({
            authenticated: false,
            initializing: false,
          });
        }
      }),
    [setAuthState]
  );

  if (authentication.authenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      <form
        action=''
        onSubmit={handleSubmit(prepareRequest)}
        className='mt-3 col-12 col-md-5 mx-auto sign-in-form'
      >
            <h1>Přihlášení</h1>
        <div className='form-group'>
          <label htmlFor='username'>Email</label>
          <input
            {...register('username')}
            type='text'
            name='username'
            className={`form-control rounded mt-2`}
            id='username'
          />
        </div>

        <div className='form-group mt-2'>
          <label htmlFor='password'>Heslo</label>
          <input
            {...register('password', {
              minLength: {
                value: 6,
                message: 'Password length must be at least 6 characters',
              },
            })}
            type='password'
            name='password'
            className={`form-control rounded mt-2`}
            id='password'
          />
        </div>

        <button className='btn btn-primary mt-4 w-100' type='submit'>
          Přihlásit se
        </button>
      </form>
    </div>
  );
}

Register.propTypes = {};

export default Register;
