import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!Meteor.userId(),
      fetchUserQuestions: false,
      survey: false
    };
    this.onLogout = this.onLogout.bind(this);
    this.getEditor = this.getEditor.bind(this);
    this.fetchUserQuestions = this.fetchUserQuestions.bind(this);
  }
  onLogout() {
    Accounts.logout();
    this.setState({ loggedIn: !!Meteor.userId() });
  }
  getEditor() {
    this.setState({
      survey: true
    });
  }
  fetchUserQuestions() {
    this.setState({
      fetchUserQuestions: true
    });
  }
  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to="/" />
      );
    } else if (this.state.fetchUserQuestions) {
      return <Redirect to="/user/questions" />;
    } else if (this.state.survey) {
      return <Redirect to="/surveyEditor" />;
    }
    return (
      <div>
        { this.state.loggedIn ?
          <div>
            {location.pathname === '/user/questions' ?
              <button
                className="button header__logout"
                onClick={this.getEditor}
              > Create </button> :
              <button
                className="button header__logout"
                onClick={this.fetchUserQuestions}
              > Questions </button>
          }

            <button
              className="button header__questions"
              onClick={this.onLogout}
            > Logout </button>
          </div> : null }
      </div>
    );
  }
}
