import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/SignupPage';
import Home from './components/Home';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import AdminPage from './pages/AdminPage';
import UserList from './components/admin/UserList';
import AdminHome from './components/admin/AdminHome';
import AccountContainer from './containers/admin/AccountContainer';
import CreateUserByAdminContainer from './containers/admin/CreateUserByAdminContainer';
import TestPage from './pages/TestPage';
import TestHome from './pages/TestHome';
import TestA from './pages/TestA';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/test/all" element={<Home />} />
        <Route path="/test/user" element={<BoardUser />} />
        <Route path="/test/mod" element={<BoardModerator />} />

        <Route path="admin" element={<AdminPage />}>
          <Route index element={<AdminHome />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="account" element={<AccountContainer />} />
          <Route path="others" />
          <Route path="create" element={<CreateUserByAdminContainer />} />
        </Route>

        <Route path="test" element={<TestPage />}>
          <Route index element={<TestHome />} />
          <Route path="aaa" element={<TestA />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
