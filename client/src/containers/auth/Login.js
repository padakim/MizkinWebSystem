import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../modules/authThunkImpl';
import LoginForm from '../../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, authError, loading } = useSelector((state) => ({
    auth: state.authThunkImpl.auth,
    authError: state.authThunkImpl.authError,
    loading: state.loading['auth/LOGIN'],
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      password: data.get('password'),
    };
    const { username, password } = jsonData;

    if (!username || !password) {
      setErrorMessage('username and password is required');
      return;
    }
    if (username && password) {
      dispatch(login(username, password));
    }
  };

  useEffect(() => {
    if (authError) {
      setErrorMessage('Wrong username or password');
      return;
    }
    if (auth) {
      try {
        localStorage.setItem('user', JSON.stringify(auth.data));
        if (
          JSON.parse(localStorage.getItem('user')).roles.includes('ROLE_ADMIN')
        ) {
          navigate('/admin');
          window.location.reload();
        } else {
          navigate('/');
          window.location.reload();
          return;
        }
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, navigate, authError]);

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      loading={loading}
    />
  );
};

export default Login;
