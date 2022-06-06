import { defaultInstance } from "./core";
import authHeader from "./auth-header";

const API_URL = "/api/test/";

const getPublicContent = () => {
  return defaultInstance.get(API_URL + "all");
};

const getUserBoard = () => {
  return defaultInstance.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return defaultInstance.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return defaultInstance.get(API_URL + "admin", { headers: authHeader() });
};
