import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

class MyQuestions extends Component {
  constructor(props) {
    super(props);
    this.removeQuestion = this.removeQuestion.bind(this);
  }
  removeQuestion() {
    Meteor.call('questions.removeQuestion', this.props.viewID);
  }
  render() {
    return (
      <div className="form__share">
        <p>{this.props.message}</p>
        <div className="form__share__buttons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button button--anchor"
            href={`http://quanti.herokuapp.com/question/${this.props.viewID}`}
          >Share</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button button--anchor"
            href={`http://quanti.herokuapp.com/charts/${this.props.viewID}`}
          >Visualize</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="button button--anchor"
            href={`http://quanti.herokuapp.com/qr/${this.props.viewID}`}
          >Generate QR</a>
          <button
            target="_blank"
            rel="noopener noreferrer"
            className="button button--anchor button__export"
            onClick={this.removeQuestion}
          >Export</button>
          <button
            target="_blank"
            rel="noopener noreferrer"
            className="button button--anchor button__remove"
            onClick={this.removeQuestion}
          >Remove</button>
        </div>
      </div>
    );
  }
}

MyQuestions.propTypes = {
  viewID: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default MyQuestions;
