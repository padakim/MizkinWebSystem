import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../modules/authThunkImpl';
import LoginForm from '../../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginResponse, loading } = useSelector((state) => ({
    loginResponse: state.authThunkImpl.loginResponse,
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
    } else {
      setErrorMessage('');
    }
    if (username && password) {
      dispatch(login(username, password));
    }
  };

  useEffect(() => {
    if (
      loginResponse &&
      loginResponse.message &&
      loginResponse.message.includes('401')
    ) {
      setErrorMessage('Wrong username or password');
    } else if (loginResponse && loginResponse.status === 200) {
      try {
        localStorage.setItem('user', JSON.stringify(loginResponse.data));
        if (
          JSON.parse(localStorage.getItem('user')).roles.includes('ROLE_ADMIN')
        ) {
          navigate('/admin');
          window.location.reload();
        } else {
          navigate('/');
          window.location.reload();
        }
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [loginResponse, navigate]);

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      formErrorMessage={errorMessage}
      loading={loading}
    />
  );
};

export default Login;
