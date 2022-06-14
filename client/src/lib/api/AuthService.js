import { defaultInstance } from "./core";
import Cookies from "js-cookie";

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

const cookie = Cookies.withConverter({
  read: function (value, name) {
    if (name === "user") {
      return unescape(value);
    }
    return Cookies.converter.read(value, name);
  },
});

const loginUser = (username, password) => {
  return defaultInstance
    .post("/api/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response.data);
        Cookies.set("user", response.data);
        console.log(Cookies.get("user"), "@@@@@@@@@@@@@@@@@@@@@");
        // localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logoutUser = () => {
  // return localStorage.removeItem("user");
  return Cookies.remove("user");
};

const getCurrentUser = () => {
  return Cookies.get("user");
  // return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default AuthService;
