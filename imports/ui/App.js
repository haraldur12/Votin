import React, { Component } from 'react';
import Header from './Header'
import AddQuestion from './AddQuestion';

export default class App extends Component {
  render(){
    return(
      <div>
        <Header title='Quantilope'/>
        <div className="wrapper">
          <AddQuestion />
        </div>
      </div>
    )
  }
}
