import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Questions } from '../../api/Questions';
import QuestionBox from '../Components/QuestionBox';
import RadioBoxList from '../Components/RadioBoxList';
import FormCreate from '../Form/FormCreate';
import Private from '../Components/Private';

class QuestionEmbed extends Component {
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
    this.renderQuestion = this.renderQuestion.bind(this);
    this.authentication = this.authentication.bind(this);
  }
  setSurveyValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  startSurvey() {
    this.setState({
      welcome: true,
      inputValue: ''
    });
  }
  postForm(e) {
    Meteor.call('questions.hasUserVotedAlready', this.props.currentQuestionID, Meteor.userId());
    e.preventDefault();
    const feedback = this.state.inputValue;
    if (this.props.questions.authenticated) {
      Meteor.call('questions.feedbackUpdateWithAuthentication', this.props.currentQuestionID, feedback, Meteor.userId());
    } else if (!this.props.questions.authenticated) {
      Meteor.call('questions.feedbackUpdate', this.props.currentQuestionID, feedback);
    }
    this.setState({ submitted: true });
  }
  authentication() {
    if (this.props.questions.authenticated && !!Meteor.userId()) {
      return <FormCreate submitForm={this.postForm} message={'Done!'} />;
    } else if (!this.props.questions.authenticated) {
      return <FormCreate submitForm={this.postForm} message={'Done!'} />;
    }
    return (
      <div className="item">
        <p className="item__message">
            This is available for authenticated users.
            Please <Link to="/login">login.</Link>
        </p>
      </div>
    );
  }
  renderQuestion() {
    if (this.props.questions.private) {
      return <Private question={this.props.questions.question} />;
    }
    return (
      this.props.questions ?
        <div>
          <QuestionBox question={this.props.questions ? this.props.questions.question : 'This is not a valid question url.'} />
          <div onChange={this.setSurveyValue}>
            <RadioBoxList
              responses={this.props.questions ? this.props.questions.responses : []}
            />
          </div>
          {this.authentication()}
        </div> : <p> Loading question </p>
    );
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
    if (this.state.submitted) {
      return (
        <Redirect to="/done" />
      );
    }
    return (
      <div>
        {this.props.questions ? this.renderQuestion() : <p>Loading...</p> }
      </div>
    );
  }
}
QuestionEmbed.propTypes = {
  questions: PropTypes.object,
  currentQuestionID: PropTypes.string
};

export default createContainer((props) => {
  Meteor.subscribe('currentQuestion', props.match.params.id);
  return {
    questions: Questions.findOne({ _id: props.match.params.id }),
    currentQuestionID: props.match.params.id
  };
}, QuestionEmbed);
