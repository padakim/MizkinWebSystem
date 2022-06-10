import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/SignupPage";
import { useState, useEffect } from "react";
import AuthService from "./lib/api/AuthService";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
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
<<<<<<< HEAD
        <Route path="/test/all" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test/user" element={<BoardUser />} />
        <Route path="/test/mod" element={<BoardModerator />} />
        <Route path="/test/admin" element={<BoardAdmin />} />
=======
        <Route path="/api/test/all" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/api/test/user" element={<BoardUser />} />
        <Route path="/api/test/mod" element={<BoardModerator />} />
        <Route path="/api/test/admin" element={<BoardAdmin />} />
>>>>>>> c3cd881c70c21be70fe71437622ecc9095326f18
      </Routes>
    </div>
  );
}

export default App;
