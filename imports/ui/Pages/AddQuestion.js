import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';

import QuestionBox from '../Components/QuestionBox';
import RadioBoxList from '../Components/RadioBoxList';
import FormShare from '../Form/FormShare';
import FormQuestion from '../Form/FormQuestion';
import FormChoice from '../Form/FormChoice';
import FormCreate from '../Form/FormCreate';
import FormDone from '../Form/FormDone';
import FormVoteSetting from '../Form/FormVoteSetting';

import ErrorMessage from '../Components/Error';

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      currentQuestion: '',
      currentResponse: '',
      question: '',
      radioboxes: [],
      submitted: false,
      viewID: '',
      loggedIn: !!Meteor.userId()
    };
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateResponses = this.updateResponses.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.createForm = this.createForm.bind(this);
    this.handleSetting = this.handleSetting.bind(this);
  }
  updateQuestion(e) {
    this.setState({
      currentQuestion: e.target.value
    });
  }
  updateResponses(e) {
    this.setState({
      currentResponse: e.target.value
    });
  }
  handleSetting(e) {
    this.setState({
      authenticated: e.target.value
    }, () => console.log(this.state.authenticated)
);
  }

  handleQuestion() {
    if (this.state.currentQuestion.length <= 20) {
      this.setState({
        error: 'The question must be at least 20 characters'
      });
    } else {
      this.setState({
        question: this.state.currentQuestion
      });
    }
  }
  handleResponse() {
    if (this.state.currentResponse !== '') {
      this.setState({
        radioboxes: this.state.radioboxes.concat([this.state.currentResponse]),
        currentResponse: ''
      });
    }
  }
  handleStatus() {
    this.setState({
      done: true
    });
  }
  createForm(e) {
    // upon creating the form resets the contents of the form
    this.setState({
      done: false,
      radioboxes: [],
      question: '',
      submitted: true,
      currentQuestion: '',
      currentResponse: ''
    });
    e.preventDefault();
    const authenticated = this.state.authenticated === 'true' ? true : false;
    const feedbacks = this.state.radioboxes.map(response => ({ response, count: 0 }));
    const question = { question: this.state.question,
      responses: this.state.radioboxes,
      feedbacks,
      authenticated
    };
    Meteor.call('questions.insert', question, (err, res) => {
      if (!err) {
        this.setState({
          viewID: res
        });
      }
    });
  }
  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <div>
        {this.state.error ? <ErrorMessage errorMessage={this.state.error} /> : null}
        {this.state.submitted ? <FormShare viewID={this.state.viewID} /> :
        <p className="item item__message">Upon completation you will get a sharable link.</p>}
        <FormVoteSetting handleSetting={this.handleSetting} />
        <FormQuestion updateQuestion={this.updateQuestion} handleQuestion={this.handleQuestion} />
        <FormChoice updateResponses={this.updateResponses} handleResponse={this.handleResponse} />
        <QuestionBox question={this.state.question} />
        <RadioBoxList responses={this.state.radioboxes} />
        {this.state.done && this.state.radioboxes.length > 1 && this.state.question.length > 20 ?
          <FormCreate submitForm={this.createForm} message={'Create Form'} /> :
          <FormDone handleStatus={this.handleStatus} /> }
      </div>
    );
  }
}
