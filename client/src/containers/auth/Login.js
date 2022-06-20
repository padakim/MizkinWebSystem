import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setFormErrorMessage } from '../../modules/authP';
import LoginForm from '../../components/auth/LoginForm';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
//seems loading is not required
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cookies = new Cookies();

  const { loading, auth, authError, formErrorMessage } = useSelector(
    (state) => ({
      loading: state.authP.loading,
      auth: state.authP.auth,
      authError: state.authP.authError,
      formErrorMessage: state.authP.formErrorMessage,
    }),
  );

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
    if (auth && auth.accessToken) {
      cookies.set('access_token', auth, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 8,
      });
      if (cookies.get('access_token').roles.includes('ROLE_ADMIN')) {
        navigate('/admin');
      } else {
        navigate('/');
        window.location.reload();
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
