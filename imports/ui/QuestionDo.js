import React , { Component } from 'react';
import Header from './Header'
import { Questions } from './../api/Questions';
import { Tracker } from 'meteor/tracker';
import CurrentQuestion from './CurrentQuestion';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Message from './Message'
import QuestionBox from './QuestionBox';
import RadioBoxList from './RadioBoxList';
import { Redirect } from 'react-router-dom'

class QuestionDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcome : false,
      submitted : false,
      inputValue : ''
    }
    this.startSurvey = this.startSurvey.bind(this);
    this.setSurveyValue = this.setSurveyValue.bind(this);
    this.postForm = this.postForm.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }
  startSurvey(){
    this.setState({
      welcome : true,
      inputValue: '',
      id : this.props.questions._id
    })
  }
  setSurveyValue(evt){
    this.setState({
          inputValue: evt.target.value
        });
    console.log(evt.target.value)
    console.log(this.state.inputValue)
  }
  postForm(e){
    e.preventDefault();
    let feedback = this.state.inputValue;
    Meteor.call('questions.update',this.state.id, feedback, (err) => {
      if (!err) {
        console.log('success');
      } else {
        console.log(err.reason)
      }
    });
    this.setState({
      submitted : true
    })
  }
  renderMessage(){
      return (
      <div className='wrapper'>
       <p className='survey__start'>Welcome!</p>
        <div className='button__survey--start'>
          <button className='button button__survey--start--next' onClick={this.startSurvey}>Next</button>
        </div>
      </div>
    )
    }
  render(){
    // https://stackoverflow.com/questions/44534647/react-router-dom-v4-redirect-to-different-route-upon-input-enter-key-press/44589162#44589162
    // All the other answers I came were unfortunately out of date because of the recent version change.
    // This was the best solution I could think of right now.
    if (this.state.submitted) {
      return (
        <Redirect to="/done"/>
      )
    }
    return (
      <div>
        {this.state.welcome ?
          <div>
          <Header title='Survey' />
          <Message message='Please pick your answer.' />
          <QuestionBox question={this.props.questions ? this.props.questions.question : 'This is not a valid question url.' } />
          <div onChange={this.setSurveyValue}>
            <RadioBoxList responses={this.props.questions ? this.props.questions.responses : []} />
          </div>
          <form  className='form' onSubmit={this.postForm}>
            <button className="button"  type="submit">Done!</button>
          </form>
         </div>
         :  this.renderMessage() }
      </div>
    )
  }
}
QuestionDo.propTypes = {
  questions: PropTypes.object,
};

export default createContainer((props) => {
  Meteor.subscribe('questions');
  return {
    questions: Questions.findOne({_id:props.id})
  };
}, QuestionDo);
