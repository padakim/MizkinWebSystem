import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setFormErrorMessage } from '../../modules/auth';
import LoginForm from '../../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

//seems loading is not required
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, authError, formErrorMessage } = useSelector((state) => ({
    auth: state.auth.auth,
    authError: state.auth.authError,
    formErrorMessage: state.auth.formErrorMessage,
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
      dispatch(setFormErrorMessage('username and password is required'));
    } else {
      dispatch(setFormErrorMessage(''));
    }
    if (username && password) {
      dispatch(login(username, password));
    }
  };

  useEffect(() => {
    if (authError) {
      dispatch(setFormErrorMessage('Wrong username or password'));
    }
    if (auth && auth.id) {
      try {
        localStorage.setItem('user', JSON.stringify(auth));
        if (
          JSON.parse(localStorage.getItem('user')).roles.includes('ROLE_ADMIN')
        ) {
          navigate('/admin');
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
      formErrorMessage={formErrorMessage}
    />
  );
};

export default Login;
