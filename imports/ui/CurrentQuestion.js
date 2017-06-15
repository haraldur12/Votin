import QuestionDo from './QuestionDo';
import React, { Component } from 'react';
import QuestionBox from './QuestionBox';

export default class CurrentQuestion extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <QuestionDo id={this.props.match.params.id} />
      </div>
    )
  }
}
