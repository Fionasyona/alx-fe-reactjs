import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/profile">Go to Profile</Link>
    <br />
    <Link to="/post/33">Go to Post 33</Link>
  </div>
);

export default Home;
