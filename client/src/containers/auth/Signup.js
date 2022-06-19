import React from 'react';
import SignupForm from '../../components/auth/SignupForm';
import { useState, useEffect } from 'react';
import AuthService from '../../lib/api/AuthService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const submitForm = () => {};

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   const jsonData = {
    //     username: data.get("username"),
    //     email: data.get("email"),
    //     password: data.get("password"),
    //     passwordConfirm: data.get("passwordConfirm"),
    //   };
    // const { username, email, password, passwordConfirm } = jsonData;
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    const erorrs = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      erorrs.username = 'Username is required';
    } else if (values.username.length < 3) {
      erorrs.username = 'Username must be more than 3 characters';
    }
    if (!values.email) {
      erorrs.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      erorrs.email = 'Invalid email format';
    }
    if (!values.password) {
      erorrs.password = 'Password is required';
    } else if (values.password.length < 4) {
      erorrs.password = 'Password must be more than 4 characters';
    }
    if (!values.passwordConfirm) {
      erorrs.passwordConfirm = 'Password confirmation is required';
    } else if (values.password !== values.passwordConfirm) {
      erorrs.passwordConfirm = 'The password confirmation does not match';
    }
    return erorrs;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) submitForm();
  }, [formErrors]);

  // const submitForm = async () => {
  //   try {
  //     const response = await AuthService.registerUser(formValues);
  //     alert(response.data.message);
  //     navigate('/login');
  //   } catch (e) {
  //     if (e.response.data.message === 'Error: Username is already taken!') {
  //       setFormErrors((prevState) => ({
  //         ...prevState,
  //         username: `Username is already used`,
  //       }));
  //     } else if (
  //       e.response.data.message === 'Error: Email is already in use!'
  //     ) {
  //       setFormErrors((prevState) => ({
  //         ...prevState,
  //         email: `Email is already used`,
  //       }));
  //     }
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const jsonData = {
  //     username: data.get("username"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     passwordConfirm: data.get("passwordConfirm"),
  //   };
  //     const res = registerUser(jsonData).then((response) => {
  //       if (response.status === 200) {
  //         alert("Welcome to join our site!");
  //         navigate("/login");
  //       }
  //       console.log(response, "this is res data");
  //     });
  //     console.log(res, "res in signup.js");
  // };

  return (
    <SignupForm
      formValues={formValues}
      formErrors={formErrors}
      isSubmitting={isSubmitting}
      submitForm={submitForm}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
};

export default Signup;
