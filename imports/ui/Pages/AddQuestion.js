import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import QuestionBox from '../Components/QuestionBox';
import RadioBoxList from '../Components/RadioBoxList';
import FormShare from '../Form/FormShare';
import FormQuestion from '../Form/FormQuestion';
import FormChoice from '../Form/FormChoice';
import FormCreate from '../Form/FormCreate';
import FormDone from '../Form/FormDone';

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
      viewID: ''
    };
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateResponses = this.updateResponses.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.createForm = this.createForm.bind(this);
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

  handleQuestion() {
    this.setState({
      question: this.state.currentQuestion
    });
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
    const feedbacks = this.state.radioboxes.map(response => ({ response, count: 0 }));
    const question = { question: this.state.question, responses: this.state.radioboxes, feedbacks };
    Meteor.call('questions.insert', question, (err, res) => {
      if (!err) {
        this.setState({
          viewID: res
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.submitted ? <FormShare viewID={this.state.viewID} /> :
        <p className="item item__message">Upon completation you will get a sharable link.</p>}
          <FormQuestion updateQuestion={this.updateQuestion} handleQuestion={this.handleQuestion} />
          <FormChoice updateResponses={this.updateResponses} handleResponse={this.handleResponse} />
          <QuestionBox question={this.state.question} />
          <RadioBoxList responses={this.state.radioboxes} />
        {this.state.done && this.state.radioboxes.length > 1 ?
          <FormCreate submitForm={this.createForm} /> :
          <FormDone handleStatus={this.handleStatus} /> }
      </div>
    );
  }
}
