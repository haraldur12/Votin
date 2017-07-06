import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorMessage from '../Components/Error';
import Header from '../Components/Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      error: '',
      loggedIn: !!Meteor.userId()
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const email = this.user.email.value.trim();
    const password = this.user.password.value.trim();
    this.props.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: 'Unable to login. Check email and password.' });
      } else {
        this.setState({ error: '', loggedIn: !!Meteor.userId() });
      }
    });
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to="/surveyEditor" />
      );
    }
    return (
      <div>
        <Header title={'Login'} />
        {this.state.error ? <ErrorMessage errorMessage={this.state.error} /> : null}
        <div className="login">
          <div className="login__box">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit} className="login__form" >
              <input
                className="login__form__input"
                type="email"
                ref={(el) => { this.user.email = el; }}
                name="email"
                placeholder="Email"
              />
              <input
                className="login__form__input"
                type="password"
                ref={(el) => { this.user.password = el; }}
                name="password"
                placeholder="Password"
              />
              <button className="button button__login">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: PropTypes.func.isRequired
};

export default createContainer(() => ({
  loginWithPassword: Meteor.loginWithPassword
}), Login);
