import React from 'react';
import CreateUser from '../../components/admin/CreateUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserByAdmin } from '../../modules/admin';

const CreateUserByAdminContainer = () => {
  const [errorMessage, setErrorMessage] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin, adminError, loading } = useSelector((state) => ({
    admin: state.admin.admin,
    adminError: state.admin.adminError,
    loading: state.loading['admin/CREATE_USER_BY_ADMIN'],
  }));

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      passwordConfirm: data.get('passwordConfirmm'),
      tel: data.get('tel'),
      address: data.get('address'),
      userRoles: data.get('userRoles'),
    };

    console.log(jsonData, '@@@@@@@@@@@@@@@@@@@@@@@@');

    setErrorMessage(validate(jsonData));

    const {
      username,
      email,
      password,
      passwordConfirm,
      tel,
      address,
      userRoles,
    } = jsonData;

    const roles = userRoles.split(',');

    if (!roles.includes('user')) {
      roles.push('user');
    }

    if (
      username &&
      email &&
      password &&
      passwordConfirm &&
      Object.keys(errorMessage).length === 0
    ) {
      dispatch(
        createUserByAdmin(username, email, password, tel, address, roles),
      );
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
    return erorrs;
  };

  useEffect(() => {
    if (adminError) {
      console.log(
        adminError.response.data.message,
        '###########################',
      );
      setErrorMessage((prevState) => ({
        ...prevState,
        adminErrorMessage: adminError.response.data.message,
      }));
      return;
    }
  }, [adminError]);

  useEffect(() => {
    if (admin) {
      alert('user add success!');
      navigate('/admin/userlist');
      // window.location.reload();
      //to reset signupResponse state in redux
      // return () => {
      //   dispatch(resetState());
      // };
      return;
    }
  }, [admin, navigate]);

  return (
    <CreateUser
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default CreateUserByAdminContainer;
