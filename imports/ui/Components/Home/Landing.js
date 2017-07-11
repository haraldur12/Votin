import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <div className="landing__full--screen">
      <div>
        <h1 className="landing__text">Votin.io</h1>
        <br />
        <Link className="landing__button" to="/signup">Join</Link>
      </div>
    </div>
  </div>
);

export default Landing;
