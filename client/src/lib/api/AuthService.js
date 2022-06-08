import { defaultInstance } from "./core";

// export const registerUser = async (formData) => {
//   const { username, email, password } = formData;
//   try {
//     const response = await defaultInstance.post("/api/auth/signup", {
//       username,
//       email,
//       password,
//     });
//     console.log(response, "signup response in auth.js(async)");
//     return response;
//   } catch (e) {
//     console.log(e.response.data.message, "error msg");
//     console.log(e);
//   }
// };

const registerUser = (formData) => {
  const { username, email, password } = formData;

  const response = defaultInstance.post("/api/auth/signup", {
    username,
    email,
    password,
  });
  return response;
};

// export const loginUser = async ({ username, password }) => {
//   try {
//     const response = await defaultInstance.post("/api/auth/signin", {
//       username,
//       password,
//     });
//     console.log(response, "signin response in auth.js(async)");
//     return response;
//   } catch (e) {

//   }
// };

const loginUser = (username, password) => {
  return defaultInstance
    .post("/api/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logoutUser = () => {
  return localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default AuthService;
