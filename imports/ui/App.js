import React, { Component } from 'react';
import Header from './Header'
import AddQuestion from './AddQuestion';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header title='Question Checkbox'/>
        <div className="wrapper">
          <AddQuestion />
        </div>
      </div>
    )
  }
}
