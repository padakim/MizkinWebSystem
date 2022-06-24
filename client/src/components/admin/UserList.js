import React, { useState } from 'react';
import axios from 'axios';
import { userState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

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

const UserList = () => {
  const [userData, setUserData] = useState({});

  const rows = userData.data;
  // const rows2 = {
  //   ...userData.data,
  //   roles: [
  //     { id: 1, name: 'ROLE_USER' },
  //     { id: 3, name: 'ROLE_ADMIN' },
  //   ],
  // };

  const rows3 = {
    ...userData.data,
    roles: `${userData && userData.data}+@@@`,
  };

  const row4 = {
    ...userData.data,
  };

  console.log(rows3, '@@@@');

  console.log(rows);
  // console.log(userData);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'roles',
      headerName: 'roles',
      type: 'array',
      width: 90,
    },
    {
      field: 'tel',
      headerName: 'Tel',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'address', headerName: 'Address', width: 200 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/admin/users');
        setUserData(res);
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
      </Box>
      <DataGrid
        sx={{ mt: 4 }}
        rows={rows || ''}
        columns={columns}
        pageSize={50}
        autoHeight
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </>
    // </div>
  );
};

export default UserList;
