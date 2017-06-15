import React, {Component} from 'react';

export default class RadioBox extends Component{
  render(){
    return(
      <div className="item">
        <input name='radio' type='radio' value={this.props.response} /> <span>{this.props.response}</span>
      </div>
    )
  }
}
