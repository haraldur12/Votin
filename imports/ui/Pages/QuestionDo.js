import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Components/Header';
import { Questions } from '../../api/Questions';
import Message from '../Components/Message';
import QuestionBox from '../Components/QuestionBox';
import RadioBoxList from '../Components/RadioBoxList';
import FormCreate from '../Form/FormCreate';

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
      inputValue: ''
    });
  }
  postForm(e) {
    e.preventDefault();
    const feedback = this.state.inputValue;
    Meteor.call('questions.feedbackUpdate', this.props.currentQuestionID, feedback);
    this.setState({ submitted: true });
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
            <FormCreate submitForm={this.postForm} message={'Done!'} />
          </div>
         : this.renderMessage() }
      </div>
    );
  }
}
QuestionDo.propTypes = {
  questions: PropTypes.object,
  currentQuestionID: PropTypes.string
};

export default createContainer((props) => {
  Meteor.subscribe('questions');
  return {
    questions: Questions.findOne({ _id: props.match.params.id }),
    currentQuestionID: props.match.params.id
  };
}, QuestionDo);
