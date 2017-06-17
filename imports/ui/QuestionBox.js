import React , { Component } from 'react';
import RadioBoxList from './RadioBoxList';
import PropTypes from 'prop-types';

export default class QuestionBox extends Component {
  constructor(props){
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
  }
  renderQuestion(){
    if(this.props.question){
      return(
        <div className="item">
          <h1>Question</h1>
          <p className="item__question">{this.props.question}</p>
        </div>
      )
    }
  }
  render(){
    return(
      <div>
      <div>
        {this.renderQuestion()}
      </div>
      <div>
      </div>
    </div>
    )
  }
}

QuestionBox.propTypes = {
  question: PropTypes.string.isRequired
};
