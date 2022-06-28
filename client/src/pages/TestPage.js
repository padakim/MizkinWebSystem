import React from 'react';
import { Outlet } from 'react-router-dom';

const TestPage = () => {
  return (
    <div>
      <h6>this is test layout</h6>
      <Outlet />
    </div>
  );
};

export default TestPage;
