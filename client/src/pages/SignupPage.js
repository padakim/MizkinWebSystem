import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Signup from '../containers/auth/Signup';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <Signup />
    </AuthTemplate>
  );
};

export default RegisterPage;
