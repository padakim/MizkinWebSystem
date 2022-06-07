import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import { registerUser } from "../../lib/api/auth";
import { useState, useEffect } from "react";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const response = await registerUser(formValues);
      alert(response.data.message);
      navigate("/login");
    } catch (e) {
      console.log(e, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      console.log(e.response.data.message);
      if (e.response.data.message === "Error: Username is already taken!") {
        setFormErrors((prevState) => ({
          ...prevState,
          username: `Username is already used`,
        }));
      } else if (
        e.response.data.message === "Error: Email is already in use!"
      ) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: `Email is already used`,
        }));
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    const erorrs = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      erorrs.username = "Username is required";
    } else if (values.username.length < 3) {
      erorrs.username = "Username must be more than 3 characters";
    }
    if (!values.email) {
      erorrs.email = "Email is required";
    } else if (!regex.test(values.email)) {
      erorrs.email = "Invalid email format";
    }
    if (!values.password) {
      erorrs.password = "Password is required";
    } else if (values.password.length < 4) {
      erorrs.password = "Password must be more than 4 characters";
    }
    if (!values.passwordConfirm) {
      erorrs.passwordConfirm = "Password confirmation is required";
    } else if (values.password !== values.passwordConfirm) {
      erorrs.passwordConfirm = "The password confirmation does not match";
    }
    return erorrs;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) submitForm();
  }, [formErrors]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const jsonData = {
  //     username: data.get("username"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     passwordConfirm: data.get("passwordConfirm"),
  //   };
  //     const res = registerUser(jsonData).then((response) => {
  //       if (response.status === 200) {
  //         alert("Welcome to join our site!");
  //         navigate("/login");
  //       }
  //       console.log(response, "this is res data");
  //     });
  //     console.log(res, "res in signup.js");
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
      >
        <Avatar sx={{ mb: 1, bgcolor: "success.main" }}>
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
          </Grid>
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
              <Link to={"/login"} variant="body2">
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
