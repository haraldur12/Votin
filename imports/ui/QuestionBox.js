import React , { Component } from 'react';
import RadioBoxList from './RadioBoxList';

export default class
Box extends Component {
  render(){
    return(
      <div>
      <div>
        {this.props.question ?
          <div className="item">
            <h1>Question</h1>
            <p className="item__question">{this.props.question}</p>
          </div> : <span></span>}
      </div>
      <div>
      </div>
    </div>
    )
  }
}
