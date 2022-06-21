import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function authHeader() {
  const user = cookies.get("access_token");
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
