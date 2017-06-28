import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import RadioBox from './RadioBox';
import Message from './Message';

export default class RadioBoxList extends Component {
  renderResponses() {
    if (this.props.responses === undefined) {
      return (
        <Message message="There are no radioboxes in this list :/" />
      );
    }
    return (
      this.props.responses.map((response, index) => <RadioBox key={index} response={response} />)
    );
  }
  render() {
    return (
      <div>
        <FlipMove duration={350} easing="ease-out">
          {this.renderResponses()}
        </FlipMove>
      </div>
    );
  }
}
RadioBoxList.propTypes = {
  responses: PropTypes.array
};
