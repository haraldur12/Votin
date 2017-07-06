import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="home__container">
    <h1> Join to Create Pools </h1>
    <Link className="button button--anchor" to="/signup"> Signup </Link>
    <Link className="button button--anchor" to="/login"> Login</Link>
  </div>
);

export default Landing;
