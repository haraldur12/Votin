import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title }) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{title}</h1>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
