import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Livestream, Register } from '../pages';
import getFirebase from './firebase';

export const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    protected: true,
    component: () => <Livestream />,
  },
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    component: () => <Login />,
  },
  {
    path: '/register',
    key: 'REGISTER',
    exact: true,
    component: () => <Register />,
  },
  {
    path: '/admin',
    key: 'ADMIN',
    exact: true,
    protected: true,
    component: () => <Livestream />,
  },
];

export function RenderRoutes({ routes }) {
  const firebase = getFirebase();

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

  if (authentication.initializing) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          if (route.protected) {
            if (authentication) {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              );
            } else {
              return <Redirect to='/login' />;
            }
          }
          return (
            <Route
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          );
        })}
        <Route component={() => <h1>404 - Not Found!</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
