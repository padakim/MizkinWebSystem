import React from 'react';
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

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['user', 'mod', 'admin'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateUser = ({ errorMessage, handleSubmit, loading }) => {
  const theme = useTheme();
  const [userRoles, setUserRoles] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserRoles(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
          Create User
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
                name="passwordConfirmm"
                type="password"
                fullWidth
                autoComplete="current-password"
                autoFocus
                error={errorMessage.passwordConfirm ? true : false}
                helperText={errorMessage.passwordConfirm}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tel"
                id="tel"
                name="tel"
                fullWidth
                autoFocus
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                id="address"
                name="address"
                fullWidth
                autoFocus
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Roles</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={userRoles}
                  onChange={handleChange}
                  input={<OutlinedInput label="Roles" name="userRoles" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, userRoles, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
          {errorMessage && (
            <Typography sx={{ color: 'red', mt: 2 }}>
              {errorMessage.adminErrorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Typography variant="subtitle1">Create</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateUser;
