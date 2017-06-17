import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
  render(){
    return(
      <div className="item">
        <p className="item__message">{this.props.message}</p>
      </div>
    )
  }
}
Message.propTypes = {
  message: PropTypes.string.isRequired
};
