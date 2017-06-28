import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioBox extends Component {
  render() {
    return (
      <div className="item">
        <input
          name="radio"
          type="radio"
          value={this.props.response}
        />
        <span>{this.props.response}</span>
      </div>
    );
  }
}
RadioBox.propTypes = {
  response: PropTypes.string.isRequired
};
