import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import Logout from './Logout';

const Header = ({ title }) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{title}</h1>
    </div>
    {Meteor.userId() ? <Logout /> : null}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
