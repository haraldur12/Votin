import React, { Component } from 'react';
import PropTypes from 'prop-types';

// grabs the choices and renders them as independent components
// radioBox is ought to written with as class since it is using flip move
// to render the boxes which uses state changes for the animations
export default class RadioBox extends Component {
  render() {
    return (
      <div className="item">
        <input
          name="radio"
          type="radio"
          value={this.props.response}
        />
        <span> {this.props.response}</span>
      </div>
    );
  }
}
RadioBox.propTypes = {
  response: PropTypes.string.isRequired
};
