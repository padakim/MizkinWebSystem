import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../lib/api/auth";

const Login = () => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({
    username: false,
    password: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const jsonData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    const { username, password } = jsonData;

    console.log(username, password);

    if (!username) {
      setFormErrors((prevState) => ({ ...prevState, username: true }));
      console.log("no user name");
    }

    if (!password) {
      setFormErrors((prevState) => ({ ...prevState, password: true }));
      console.log("no password");
    }

    loginUser(jsonData).then((res) => {
      console.log(res);
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
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
          {/* <TextField
            margin="normal"
            required
            label="Email Address"
            id="email"
            name="email"
            fullWidth
            type="email"
            autoComplete="email"
            autoFocus
          /> */}
          <TextField
            margin="normal"
            label="username"
            id="username"
            name="username"
            fullWidth
            type="text"
            autoComplete="true"
            autoFocus
            error={formErrors.username}
            helperText={formErrors.username && "username is required"}
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
            error={formErrors.password}
            helperText={formErrors.username && "password is required"}
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
