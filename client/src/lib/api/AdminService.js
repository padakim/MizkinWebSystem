import { defaultInstance } from './core';

const createUserByAdmin = (
  username,
  email,
  password,
  tel,
  address,
  userRoles,
) => {
  console.log(
    username,
    email,
    password,
    tel,
    address,
    userRoles,
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
  );

  const response = defaultInstance.post('/admin/create', {
    username,
    email,
    password,
    tel,
    address,
    userRoles,
  });
  return response;
};

const AdminService = {
  createUserByAdmin,
};

export default AdminService;
