// import {getItem} from @sessionStorage
import axios from "axios";

// const instance = axios.create({
//   headers: { "X-Custom-Header": "foobar" },
//   baseURL: BASE_URL,
//   timeout: 1500,
// });

const axiosApi = () => {
  const instance = axios.create({
    // timeout: 1500,
    withCredentials: true,
  });
  return instance;
};

export const defaultInstance = axiosApi();

// const axiosAuthApi = (url, options) => {
//   const token = getItem("userInformation");
//   const instance = axios.create({
//     baseURL: url,
//     headers: { Authorization: "Bearer" + token },
//     ...options,
//   });
// };
// export const authInstance = axiosAuthApi(BASE_URL)

// setting for interceptors
// //setting request timeout
// axiosInstance.defaults.timeout = 2500;
// //adding request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     //do this logic befor sending request
//     return config;
//   },
//   (error) => {
//     //request error logic
//     console.log(error);
//   }
// );
// //adding response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     //logic for response
//     const res = response.data;
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
