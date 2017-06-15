import React, { Component } from 'react';
import QuestionBox from './QuestionBox';
import RadioBoxList from './RadioBoxList';
import { Questions } from './../api/Questions';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      done : false,
      currentQuestion: '',
      currentResponse : '',
      question : '',
      radioboxes : [],
      submitted : false,
      viewID : ''
      };
      this.updateQuestion = this.updateQuestion.bind(this);
      this.updateResponses = this.updateResponses.bind(this);
      this.handleQuestion = this.handleQuestion.bind(this);
      this.handleResponse = this.handleResponse.bind(this);
      this.handleStatus = this.handleStatus.bind(this);
      this.createForm = this.createForm.bind(this);

  }
  componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
  }
}
  updateQuestion(e){
    this.setState({
     currentQuestion: e.target.value
    });
  }
  updateResponses(e) {
    this.setState({
      currentResponse: e.target.value
    });
  }

  handleQuestion(){
    this.setState({
      question : this.state.currentQuestion
    });
  }
  handleResponse(){
    if(this.state.currentResponse !== '')
    this.setState({
      radioboxes : this.state.radioboxes.concat([this.state.currentResponse]),
      currentResponse :''
    });
    this.refs.radioBox.value = '';
  }
  handleStatus(){
    this.setState({
      done : true
    });
  }
  createForm(e){
    this.setState({
      done : false,
      radioboxes : [],
      question : '',
      submitted : true,
      currentQuestion : '',
      currentResponse : ''
    })
    e.preventDefault();
    let feedbacks = this.state.radioboxes.map(response => {
      return {response, count : 0}
    });
    let question = {question : this.state.question, responses : this.state.radioboxes,feedbacks};
    Meteor.call('questions.insert', question, (err, res) => {
      if (!err) {
        this.setState({
          viewID : res
        });
        console.log('ID: ', res);
        console.log('success');
      } else {
        console.log(err.reason)
      }
    });

  }
  render(){
    return(
      // it could be probably divided into a few more components however I had problems figuring out dispatching in
      // the newer version since I was not upto date. I have done a bit of reading but unfortunately I couldn't figure out
      // how to pass an x amount of radioboxes
      <div>
        {this.state.submitted ?
        <p className='item item__message'>You have successfully submitted your form.
          <a target='_blank' className='button button--anchor' href={`${window.location.href}question/${this.state.viewID}`}>Share</a>
          <a target='_blank' className='button button--anchor' href={`${window.location.href}charts/${this.state.viewID}`}>Visualize</a>
        </p> :
        <p className='item item__message'>Upon completation you will get a sharable link.</p>
        }
        <div className='item'>
            <div className='form'>
              <input maxLength='240' className='form__input' type='text' name='question' onChange={this.updateQuestion} placeholder='Question' />
              <button className='button' onClick={this.handleQuestion}  type='submit'>Add Question</button>
          </div>
        </div>
        <div className='item'>
          <div className='form'>
          <input className='form__input' ref='radioBox' type='text' name='radioboxes' onChange={this.updateResponses} placeholder='RadioBox' />
          <button className='button' onClick={this.handleResponse}  type='submit'>Add Checkbox</button>
          </div>
        </div>
        <QuestionBox question={this.state.question} />
        <RadioBoxList responses={this.state.radioboxes} />
        <div>
        {this.state.done && this.state.radioboxes.length > 1 ?
         <div>
            <form  className='form' onSubmit={this.createForm}>
              <button className='button' type='submit'>Create Form</button>
            </form>
        </div>
       : <div>
          <p className='item__message'>You must fill in the form before submitting. It should have at least two choices.</p>
          <button className='button button--submit' onClick={this.handleStatus}>Done!</button>
        </div>
        }
     </div>
   </div>
    )
  }
}
