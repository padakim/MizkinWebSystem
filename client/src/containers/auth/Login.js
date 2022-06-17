import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loading, response, login } from '../../modules/authP';
import LoginForm from '../../components/auth/LoginForm';
import Cookies from 'universal-cookie';
import AuthService from '../../lib/api/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cookies = new Cookies();

  // const { login, auth, authError, user } = useSelector((state) => ({
  //   form: state.auth.login,
  //   // form: state.auth.login,
  // }));
  const { loading, response } = useSelector((state) => ({
    loading: state.authP.loading,
    response: state.authP.response,
  }));
  const loadingLogin = useSelector((state) => state.loading['authP/LOGIN']);

  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   dispatch(
  //     changeField({
  //       form: 'login',
  //       key: name,
  //       value,
  //     }),
  //   );
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      password: data.get('password'),
    };
    console.log(jsonData);

    const { username, password } = jsonData;

    if (!username) {
      setFormErrors((prevState) => ({
        ...prevState,
        username: 'username is required',
      }));
    } else {
      setFormErrors({});
    }
    if (!password) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: 'password is required',
      }));
    } else {
      setFormErrors({});
    }

    dispatch(login({ username, password }));

    // if (username && password) {
    //   AuthService.loginUser(username, password).then(
    //     () => {
    //       if (cookies.get('access_token').roles.includes('ROLE_ADMIN')) {
    //         navigate('/admin');
    //       } else {
    //         navigate('/');
    //         window.location.reload();
    //       }
    //     },
    //     (error) => {
    //       if (error.response.status === 401) {
    //         setFormErrors((prevState) => ({
    //           ...prevState,
    //           password: 'Wrong username or password',
    //         }));
    //       }
    //     },
    //   );
    // }
  };

  //initializing form when component is first rendered
  // useEffect(() => {
  //   dispatch(initializeForm('login'));
  // }, [dispatch]);

  return <LoginForm handleSubmit={handleSubmit} formErrors={formErrors} />;
};

export default Login;
