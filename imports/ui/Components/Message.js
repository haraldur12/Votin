import React from 'react';
import PropTypes from 'prop-types';


const Message = ({ message }) => (
  <div className="item">
    <p className="item__message">{message}</p>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
