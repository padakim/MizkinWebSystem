import React from 'react';
import SignupForm from '../../components/auth/SignupForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setFormErrorMessage } from '../../modules/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, authError, formErrorMessage, loading } = useSelector(
    (state) => ({
      auth: state.auth.auth,
      authError: state.auth.authError,
      formErrorMessage: state.auth.formErrorMessage,
      loading: state.auth.loading.SIGNUP,
    }),
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirm: data.get('passwordConfirm'),
    };
    dispatch(setFormErrorMessage(validate(jsonData)));
    const { username, email, password, passwordConfirm } = jsonData;
    if (
      username &&
      email &&
      password &&
      passwordConfirm &&
      Object.keys(formErrorMessage).length === 0
    ) {
      dispatch(signup(username, email, password));
    }
  };

  const validate = (jsonData) => {
    const { username, email, password, passwordConfirm } = jsonData;
    const erorrs = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!username) {
      erorrs.username = 'Username is required';
    } else if (username.length < 3) {
      erorrs.username = 'Username must be more than 3 characters';
    }
    if (!email) {
      erorrs.email = 'Email is required';
    } else if (!regex.test(email)) {
      erorrs.email = 'Invalid email format';
    }
    if (!password) {
      erorrs.password = 'Password is required';
    } else if (password.length < 4) {
      erorrs.password = 'Password must be more than 4 characters';
    }
    if (!passwordConfirm) {
      erorrs.passwordConfirm = 'Password confirmation is required';
    } else if (password !== passwordConfirm) {
      erorrs.passwordConfirm = 'The password confirmation does not match';
    }
    if (Object.keys(erorrs).length === 0) {
      return '';
    } else {
      return erorrs;
    }
  };

  useEffect(() => {
    if (auth) {
      alert('Welcome to join our site!');
      navigate('/login');
    }
  }, [auth]);

  return (
    <SignupForm
      formErrors={formErrorMessage}
      handleSubmit={handleSubmit}
      authError={authError}
      loading={loading}
    />
  );
};

export default Signup;
