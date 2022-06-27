import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import Signup from '../containers/auth/Signup';

const RegisterPage = () => {
  return (
    <AuthTemplate type="signup">
      <Signup />
    </AuthTemplate>
  );
};

export default RegisterPage;
