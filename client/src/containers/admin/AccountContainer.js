import React from 'react';
import Account from '../../components/admin/Account';
import { useSelector } from 'react-redux';

const AccountContainer = () => {
  const { user } = useSelector((state) => ({
    user: state.user.user,
  }));

  return <Account user={user} />;
};

export default AccountContainer;
