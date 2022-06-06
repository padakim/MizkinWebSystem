import { defaultInstance } from "./core";

// const signup = async (userInfo) => {
//   const { email, password, firstName, lastName } = userInfo;
//   try {
//     const response = await defaultInstance.post("/signup", {
//       username: email,
//       password: password,
//       firstname: firstName,
//       lastname: lastName,
//     });
//     console.log(response);
//     return response;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export default {
//   signup,
// };
export const registerUser = async (formData) => {
  const { username, email, password } = formData;
  try {
    const response = await defaultInstance.post("/api/auth/signup", {
      username,
      email,
      password,
    });
    console.log(response, "signup response in auth.js(async)");
    return response;
  } catch (e) {
    console.log(e.response.data.message, "error msg");
    console.log(e);
  }
};

export const loginUser = async (formData) => {
  const { username, password } = formData;
  try {
    const response = await defaultInstance.post("/api/auth/signin", {
      username,
      password,
    });
    console.log(response, "signin response in auth.js(async)");
    return response;
  } catch (e) {
    console.log(e.response.statusText, "error msg");
    console.log(e);
  }
};

export const logoutUser = () => {
  return localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
