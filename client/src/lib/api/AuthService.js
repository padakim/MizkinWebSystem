import { defaultInstance } from './core';
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

const registerUser = (username, email, password) => {
  const response = defaultInstance.post('/api/auth/signup', {
    username,
    email,
    password,
  });
  return response;
};

const loginUser = (username, password) => {
  console.log(username, password, '!!!!!!!!!!!!!!!!!!!!!!');

  return defaultInstance.post('/api/auth/signin', {
    username,
    password,
  });
  // .then((response) => {
  //   if (response.data) {
  //     // localStorage.setItem("user", JSON.stringify(response.data));
  //     cookies.set('access_token', response.data, {
  //       path: '/',
  //       maxAge: 1000 * 60 * 60 * 8,
  //     });
  //     // console.log(cookies.get("access_token"));
  //   }
  //   return response.data;
  // });
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
// const cookie = Cookies.withConverter({
//   read: function (value, name) {
//     if (name === "user") {
//       return unescape(value);
//     }
//     return Cookies.converter.read(value, name);
//   },
// });

// const loginUser = (username, password) => {
//   return defaultInstance
//     .post('/api/auth/signin', {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data) {
//         // localStorage.setItem("user", JSON.stringify(response.data));
//         cookies.set('access_token', response.data, {
//           path: '/',
//           maxAge: 1000 * 60 * 60 * 8,
//         });
//         // console.log(cookies.get("access_token"));
//       }
//       return response.data;
//     });
// };

const logoutUser = () => {
  // return localStorage.removeItem("user");
  // return cookies.remove('access_token');
  return defaultInstance.post('/api/auth/signout');
};

// const getCurrentUser = () => {
//   return cookies.get('access_token');
//   // return JSON.parse(localStorage.getItem("user"));
// };

const AuthService = {
  registerUser,
  loginUser,
  logoutUser,
  // getCurrentUser,
};

export default AuthService;
