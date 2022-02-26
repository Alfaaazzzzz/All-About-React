import React from "react";
import {Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>This is Welcome Page</h1>
      <Link to='new-user'>New User</Link>
      <Outlet/>
    </div>
  );
};

export default Welcome;
