import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import CircularProgress from '@mui/material/CircularProgress';

const Signup = ({ errorMessage, signupResponse, handleSubmit, loading }) => {
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
                error={errorMessage.username ? true : false}
                helperText={errorMessage.username}
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
                error={errorMessage.email ? true : false}
                helperText={errorMessage.email}
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
                error={errorMessage.password ? true : false}
                helperText={errorMessage.password}
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
                error={errorMessage.passwordConfirm ? true : false}
                helperText={errorMessage.passwordConfirm}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
          </Grid>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
          {signupResponse && signupResponse.response && (
            <Typography sx={{ color: 'red', mt: 2 }}>
              {signupResponse.response.data.message}
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
