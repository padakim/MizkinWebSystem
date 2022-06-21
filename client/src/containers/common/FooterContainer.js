import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/user';
import Footer from '../../components/common/Footer';

const FooterContainer = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: state.user.user,
    logoutError: state.user.logoutError,
  }));

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Footer user={user} handleLogout={handleLogout} />;
};

export default FooterContainer;
