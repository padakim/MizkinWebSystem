import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import CreateUserByAdminContainer from '../containers/admin/CreateUserByAdminContainer';

const CreateUserByAdminPage = () => {
  return (
    <AuthTemplate type="createUserByAdmin">
      <CreateUserByAdminContainer />
    </AuthTemplate>
  );
};

export default CreateUserByAdminPage;
