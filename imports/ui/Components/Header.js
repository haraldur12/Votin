import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Logout from './User/Logout';

const Header = ({ title }) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{title}</h1>
    </div>
    {Meteor.userId() ? <Logout /> :
    <div className="dropdown">
      <button className="button header__navigation">Login</button>
      <button className="button header__navigation">Signup</button>
      <button className="button header__navigation">About</button>
      <button className="button header__navigation">How it Works</button>
      <button className="button header__navigation">Terms of Service</button>
    </div>
  }
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
