import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const LoginForm = ({ handleSubmit, errorMessage, loading }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Avatar sx={{ mb: 1, bgcolor: 'success.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            label="username"
            id="username"
            name="username"
            fullWidth
            type="text"
            autoComplete="true"
            autoFocus
          />
          <TextField
            margin="normal"
            label="Password"
            id="password"
            name="password"
            fullWidth
            autoComplete="current-password"
            type="password"
            autoFocus
          />
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          )}
          <Typography sx={{ color: 'red' }}>{errorMessage}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography variant="subtitle1">LogIn</Typography>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={'/'}>Forgot password?</Link>
            </Grid>
            <Grid>
              <Link to={'/signup'}>Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
