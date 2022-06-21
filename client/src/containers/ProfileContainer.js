import React from 'react';
import Profile from '../components/Profile';
import { useSelector } from 'react-redux';

const ProfileContainer = () => {
  const { user } = useSelector((state) => ({
    user: state.user.user,
  }));

  return <Profile user={user} />;
};

export default ProfileContainer;
