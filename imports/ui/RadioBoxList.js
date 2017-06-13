import React, { Component } from 'react';
import RadioBox from './RadioBox'
import FlipMove from 'react-flip-move';

export default class RadioBoxList extends Component {
  constructor(props){
    super(props);
  }

  renderResponses(){
    if(this.props.responses === undefined){
      return (
          <div className="item">
            <p className="item__message"> There are no radiboxes in this list :/ </p>
          </div>
        )
    } else {
      return this.props.responses.map((response,index) => {
        return  <RadioBox key={index} response={response}/>
        });
      }
    }
  render(){
    return(
      <div>
      <FlipMove  duration={350} easing="ease-out">
        {this.renderResponses()}
      </FlipMove>

      </div>
    )
  }
}
