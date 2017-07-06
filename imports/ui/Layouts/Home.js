import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';

import Landing from '../Components/Home/Landing';
// import Motto from '../Components/Home/Motto';
import Header from '../Components/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!Meteor.userId()
    };
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to="/surveyEditor" />
      );
    }
    return (
      <div>
        <Header title={'Votin'} />
        <Landing />
      </div>
    );
  }
}
export default Home;
