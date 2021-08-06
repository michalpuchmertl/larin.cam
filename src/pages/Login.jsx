import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function Login(props) {
  const [user, updateUser] = useState('');
  const history = useHistory();

  // "log in" a user
  function handleLogin() {
    localStorage.setItem('user', user);
    history.push('/');
  }

  // if user already "authenticated", redirect them to the app
  if (localStorage.getItem('user')) {
    alert(
      "You're already authenticated in localStorage and being redirected into the app."
    );
    return <Redirect to={'/'} />;
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Log In</h1>
      <div>
        <label>User (anything will work)</label>
        <input value={user} onChange={(e) => updateUser(e.target.value)} />
        <button disabled={!user} onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
