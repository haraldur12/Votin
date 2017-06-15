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
  postForm(){
    let feedback = this.state.inputValue;
    Meteor.call('questions.update',this.state.id, feedback, (err) => {
      if (!err) {
        console.log('success');
      } else {
        console.log(err.reason)
      }
    });
    console.log(history)
    this.props.history.push('/done');
  }
  renderMessage(){
    if(this.state.submitted){
      return <p className='survey__start'>Thanks!</p>
    }else {
      return (
      <div className='wrapper'>
       <p className='survey__start'>Welcome!</p>
        <div className='button__survey--start'>
          <button className='button button__survey--start--next' onClick={this.startSurvey}>Next</button>
        </div>
      </div>
    )
    }
  }
  render(){
    return(
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
            <button className="button" type="submit">Done!</button>
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
