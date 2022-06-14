import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/SignupPage";
import { useState, useEffect } from "react";
import AuthService from "./lib/api/AuthService";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import AdminHome from "./components/admin/AdminHome";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies(["name"]);
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  function onChange(newName) {
    setCookies("name", newName, { path: "/" });
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      // console.log(user);
      // console.log(user.roles.includes("ROLE_ADMIN"));
      setIsLogin(true);
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logoutUser();
    window.location.reload();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<MainPage currentUser={currentUser} logout={logOut} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/test/all" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test/user" element={<BoardUser />} />
        <Route path="/test/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default App;
