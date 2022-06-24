import React, { useState, useEffect } from 'react';
import UserService from '../../lib/api/UserService';
import { useOutletContext } from 'react-router-dom';

const AdminHome = () => {
  // const [category, setCategory] = useOutletContext();

  const [content, setContent] = useState('');
  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        console.log(error, '!!!!!!!!!!!!!!!!!!!!!!!');
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      },
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
export default AdminHome;
