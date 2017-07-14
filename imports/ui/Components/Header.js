import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Logout from './User/Logout';
import FaBars from 'react-icons/lib/fa/bars'
const Header = ({ title }) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{title}</h1>
    </div>
    {Meteor.userId() ? <Logout /> :
    <div className="dropdown">
      <button className="button header__navigation dropdown__menu"> Menu </button>
      <div className="dropdown-content">
      <Link to="/login" className="button header__navigation">Login</Link>
      <Link to="/signup" className="button header__navigation">Signup</Link>
      <Link to="/about" className="button header__navigation">About</Link>
      <Link to="/How" className="button header__navigation">How it Works</Link>
      {/* <Link to="/tos" className="button header__navigation">Terms of Service</Link> */}
    </div>
    </div>
  }
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
