import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!Meteor.userId()
    };
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    Accounts.logout();
    this.setState({ loggedIn: !!Meteor.userId() });
  }
  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div>
        { this.state.loggedIn ?
          <div>
            <button className="button button__logout" onClick={this.onLogout}> Logout </button>
          </div> : null }
      </div>
    );
  }
}
