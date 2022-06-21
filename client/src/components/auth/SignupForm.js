import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import RememberMeIcon from '@mui/icons-material/RememberMe';

const Signup = ({ formErrors, authError, handleSubmit }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
      >
        <Avatar sx={{ mb: 1, bgcolor: 'success.main' }}>
          <RememberMeIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                id="username"
                name="username"
                fullWidth
                autoFocus
                error={formErrors.username ? true : false}
                helperText={formErrors.username}
                inputProps={{ maxLength: 20 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                id="email"
                name="email"
                fullWidth
                autoComplete="email"
                autoFocus
                error={formErrors.email ? true : false}
                helperText={formErrors.email}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                id="password"
                name="password"
                type="password"
                fullWidth
                autoComplete="current-password"
                autoFocus
                error={formErrors.password ? true : false}
                helperText={formErrors.password}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password Confirm"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                fullWidth
                autoComplete="current-password"
                autoFocus
                error={formErrors.passwordConfirm ? true : false}
                helperText={formErrors.passwordConfirm}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
          </Grid>
          {authError && (
            <Typography sx={{ color: 'red', mt: 2 }}>
              {authError.response.data.message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography variant="subtitle1">Sign Up</Typography>
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={'/login'} variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
