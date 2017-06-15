import React, { Component } from 'react';

export default class Message extends Component {
  render(){
    return(
      <div className="item">
        <p className="item__message">{this.props.message}</p>
      </div>
    )
  }
}
