import React, { useState } from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../lib/api/AuthService";
import Cookies from "universal-cookie";

const Login = () => {
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    const { username, password } = jsonData;

    if (!username) {
      setFormErrors((prevState) => ({
        ...prevState,
        username: "username is required",
      }));
    } else {
      setFormErrors({});
    }
    if (!password) {
      setFormErrors((prevState) => ({
        ...prevState,
        password: "password is required",
      }));
    } else {
      setFormErrors({});
    }

    if (username && password) {
      AuthService.loginUser(username, password).then(
        () => {
          if (cookies.get("access_token").roles.includes("ROLE_ADMIN")) {
            navigate("/admin");
          } else {
            navigate("/");
            window.location.reload();
          }
        },
        (error) => {
          if (error.response.status === 401) {
            setFormErrors((prevState) => ({
              ...prevState,
              password: "Wrong username or password",
            }));
          }
        }
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Avatar sx={{ mb: 1, bgcolor: "success.main" }}>
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
            error={formErrors.username ? true : false}
            helperText={formErrors.username}
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
            error={formErrors.password ? true : false}
            helperText={formErrors.password}
          />
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
              <Link to={"/"}>Forgot password?</Link>
            </Grid>
            <Grid>
              <Link to={"/signup"}>Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
