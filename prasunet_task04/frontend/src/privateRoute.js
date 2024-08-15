// src/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const { exp } = jwtDecode(token);
      return exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
