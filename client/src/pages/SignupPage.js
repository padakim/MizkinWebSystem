import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Signup from '../components/auth/SignupForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <Signup />
    </AuthTemplate>
  );
};

export default RegisterPage;
