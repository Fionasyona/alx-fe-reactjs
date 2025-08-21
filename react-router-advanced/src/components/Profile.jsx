import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">ProfileDetails</Link> |
      <Link to="settings">ProfileSettings</Link>
    </nav>
    <Outlet /> {/* Nested routes render here */}
  </div>
);

export default Profile;
