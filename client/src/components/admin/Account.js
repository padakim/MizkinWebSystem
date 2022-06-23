import React from 'react';

const Account = ({ user }) => {
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Profile</h3>
        <p>
          <strong>username: </strong>
          {user.username}
        </p>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p>
        <strong>Id:</strong> {user.id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {user.roles &&
          user.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
  return <div></div>;
};

export default Account;
