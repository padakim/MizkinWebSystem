import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../modules/authP';
import LoginForm from '../../components/auth/LoginForm';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
//seems loading is not required
const Login = () => {
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const { loading, auth, authError } = useSelector((state) => ({
    loading: state.authP.loading,
    auth: state.authP.auth,
    authError: state.authP.authError,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      password: data.get('password'),
    };
    console.log(jsonData);

    const { username, password } = jsonData;

    if (!username || !password) {
      setFormErrors((prevState) => ({
        ...prevState,
        errorMessage: 'username and password is required',
      }));
    } else {
      setFormErrors({});
    }

    if (username && password) {
      dispatch(login(username, password));
    }
  };

  useEffect(() => {
    if (authError) {
      setFormErrors((prevState) => ({
        ...prevState,
        errorMessage: 'Wrong username or password',
      }));
    }
    if (auth) {
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
      formErrors={formErrors}
      loading={loading}
    />
  );
};

export default Login;
