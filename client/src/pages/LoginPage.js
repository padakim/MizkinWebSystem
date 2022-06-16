import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Login from '../containers/auth/Login';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Login />
    </AuthTemplate>
  );
};

export default LoginPage;
