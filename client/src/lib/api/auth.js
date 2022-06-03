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
  const { email, password, firstName, lastName } = formData;
  try {
    const response = await defaultInstance.post("/signup", {
      username: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
    });
    console.log(response, "response in auth.js(async)");
    return response;
  } catch (e) {
    console.log(e);
  }
};
