import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setFormErrorMessage } from '../../modules/auth';
import LoginForm from '../../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, authError, loading } = useSelector((state) => ({
    auth: state.auth.auth,
    authError: state.auth.authError,
    loading: state.auth.loading.LOGIN,
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
      // dispatch(setFormErrorMessage('username and password is required'));
    } else {
      setErrorMessage('');
      // dispatch(setFormErrorMessage(''));
    }
    if (username && password) {
      dispatch(login(username, password));
    }
  };

  useEffect(() => {
    if (authError) {
      setErrorMessage('Wrong username or password');
      // dispatch(setFormErrorMessage('Wrong username or password'));
    }
    if (auth && auth.id) {
      try {
        localStorage.setItem('user', JSON.stringify(auth));
        if (
          JSON.parse(localStorage.getItem('user')).roles.includes('ROLE_ADMIN')
        ) {
          navigate('/admin');
          // window.location.reload();
        } else {
          navigate('/');
          window.location.reload();
        }
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, authError]);

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      formErrorMessage={errorMessage}
      loading={loading}
    />
  );
};

export default Login;
