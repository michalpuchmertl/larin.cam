import React, { useState } from 'react';
import { useForm, UseFormProps, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema.config';
import firebase from 'firebase';
import 'firebase/auth';

function Register(props) {
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
    const { username, password } = reqData;
    const auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(username, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container'>
      <h1>Join our community</h1>
      <form
        action=''
        onSubmit={handleSubmit(prepareRequest)}
        className='mt-3 col-12 col-md-5 mx-auto'
      >
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

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
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
          Register
        </button>
      </form>
    </div>
  );
}

Register.propTypes = {};

export default Register;
