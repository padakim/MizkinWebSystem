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

const LoginForm = ({ handleSubmit, formErrors }) => {
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
            // error={formErrors.username ? true : false}
            // helperText={formErrors.username}
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
            // error={formErrors.password ? true : false}
            // helperText={formErrors.password}
          />
          <Typography sx={{ color: 'red' }}>
            {formErrors.errorMessage}
          </Typography>
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
