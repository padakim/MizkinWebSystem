import axios from 'axios';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// const rows = [
//   {
//     id: 1,
//     username: 'kk',
//     email: 'kjk@gmail.com',
//     roles: [
//       { id: 1, name: 'ROLE_USER' },
//       { id: 2, name: 'ROLE_MODERATOR' },
//     ],
//   },
//   {
//     id: 2,
//     username: 'pdk',
//     email: 'ddddd@gmail.com',
//     roles: [
//       { id: 1, name: 'ROLE_USER' },
//       { id: 2, name: 'ROLE_MODERATOR' },
//       { id: 3, name: 'ROLE_ADMIN' },
//     ],
//     tel: '12312312',
//     address: 'osaka',
//   },
//   {
//     id: 3,
//     username: 'kffk',
//     email: 'kdafjk@gmail.com',
//     roles: [
//       { id: 1, name: 'ROLE_USER' },
//       { id: 2, name: 'ROLE_MODERATOR' },
//     ],
//   },
// ];

// const rows3 = [
//   { ...rows[0], roles: `${rows[0].roles[0].name}/${rows[0].roles[1].name}` },
//   {
//     ...rows[1],
//     roles: `${rows[1].roles[0].name}/${rows[1].roles[1].name}/${rows[1].roles[2].name}`,
//   },
//   { ...rows[2], roles: `${rows[2].roles[0].name}/${rows[2].roles[1].name}` },
// ];

// const momo = [];

// for (let row of rows) {
//   momo.push({ ...row, roles: row.roles.map((role) => role.name).join('/') });
// }

// for (let row of rows) {
//   momo.push({
//     ...row,
//     roles: Object.keys(row.roles).map((role) => row.roles[role]),
//   });
// }

// const rows2 = [...rows, JSON.stringify(rows[0].roles)];
// const rows2 = [...rows, rows[0].roles[0].name, rows[0].roles[1].name];

// const rows3 = [{...rows[0],rows[0].roles:rows[0].roles[0].name, rows[0].roles[1].name}]

// Object.keys(userData.data).map((key) => {
//   row1[key] = userData.data[key];
// });

const UserList = () => {
  const [userData, setUserData] = useState([]);

  const rows = [];

  for (let row of userData) {
    rows.push({
      ...row,
      roles: row.roles
        .map((role) => role.name)
        .join('/')
        .replace(/ROLE_/g, ''),
    });
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 180 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'roles',
      headerName: 'roles',
      // type: 'array',
      width: 200,
      // description: 'This column has a value getter and is not sortable.',
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'tel',
      headerName: 'Tel',
      width: 150,
    },
    { field: 'address', headerName: 'Address', width: 250 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/admin/users');
        const data = res.data;
        setUserData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    // <div style={{ width: '83vw', margin: 50 }}>
    <>
      <Typography variant="h3" margin={1}>
        UserList
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-search"
          label="Search user"
          type="search"
          variant="filled"
        />
        <Link to="/admin/create" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Create</Button>
        </Link>
      </Box>
      {userData && (
        <DataGrid
          sx={{ mt: 4 }}
          rows={rows || ''}
          columns={columns}
          pageSize={17}
          autoPageSize
          autoHeight
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </>
    // </div>
  );
};

export default UserList;
