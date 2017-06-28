import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import { Questions } from './../api/Questions';
import Message from './Message';
import QuestionBox from './QuestionBox';
import RadioBoxList from './RadioBoxList';

class QuestionDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: false,
      submitted: false,
      inputValue: ''
    };
    this.startSurvey = this.startSurvey.bind(this);
    this.setSurveyValue = this.setSurveyValue.bind(this);
    this.postForm = this.postForm.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }
  setSurveyValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  startSurvey() {
    this.setState({
      welcome: true,
      inputValue: '',
      id: this.props.questions._id
    });
  }
  postForm(e) {
    e.preventDefault();
    const feedback = this.state.inputValue;
    Meteor.call('questions.feedbackUpdate', this.state.id, feedback);
    this.setState({
      submitted: true
    });
  }
  renderMessage() {
    return (
      <div className="wrapper">
        <p className="survey__start">Welcome!</p>
        <div className="button__survey--start">
          <button
            className="button button__survey--start--next"
            onClick={this.startSurvey}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  render() {
    // https://stackoverflow.com/questions/44534647/react-router-dom-v4-redirect-to-different-route-upon-input-enter-key-press/44589162#44589162
    // All the other answers I came across, unfortunately,
    // were out of date because of the recent version change.
    // This was the best solution I could think of and find right now.
    if (this.state.submitted) {
      return (
        <Redirect to="/done" />
      );
    }
    return (
      <div>
        {this.state.welcome ?
          <div>
            <Header title="Survey" />
            <Message message="Please pick your answer." />
            <QuestionBox question={this.props.questions ? this.props.questions.question : 'This is not a valid question url.'} />
            <div onChange={this.setSurveyValue}>
              <RadioBoxList
                responses={this.props.questions ? this.props.questions.responses : []}
              />
            </div>
            <form className="form" onSubmit={this.postForm}>
              <button className="button" type="submit">Done!</button>
            </form>
          </div>
         : this.renderMessage() }
      </div>
    );
  }
}
QuestionDo.propTypes = {
  questions: PropTypes.object
};

export default createContainer((props) => {
  Meteor.subscribe('questions');
  return {
    questions: Questions.findOne({ _id: props.match.params.id })
  };
}, QuestionDo);
