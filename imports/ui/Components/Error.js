import React from 'react';
import PropTypes from 'prop-types';


const ErrorMessage = ({ errorMessage }) => (

  <div className="flash__message flash__message--error">
    <i className="fa fa-exclamation-circle" />{errorMessage}
  </div>

);

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
};

export default ErrorMessage;
