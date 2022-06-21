import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/SignupPage';
import Home from './components/Home';
import ProfileContainer from './containers/ProfileContainer';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import AdminHome from './components/admin/AdminHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/test/all" element={<Home />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/test/user" element={<BoardUser />} />
        <Route path="/test/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default App;
