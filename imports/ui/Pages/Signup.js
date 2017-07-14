import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorMessage from '../Components/Error';
import Header from '../Components/Header';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      error: '',
      loggedIn: !!Meteor.userId()
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const email = this.user.email.value.trim();
    const password = this.user.password.value.trim();
    const username = this.user.username.value.trim();

    if (password.length < 9) {
      this.setState({ error: 'Password must be more than 8 characters long' });
    }
    this.props.createUser({ email, password, username }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', registered: !!Meteor.userId() });
      }
    });
  }
  renderForm() {
    return this.state.registered ? <Redirect to="/surveyEditor" /> :
     (<div className="login">
       <div className="login__box">
         <h1>Signup</h1>
         <form onSubmit={this.onSubmit} className="login__form" >
           <input
             className="login__form__input"
             type="text"
             ref={(el) => { this.user.username = el; }}
             name="email"
             placeholder="Username"
           />
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
           <button className="button button__login">Sign Up</button>
         </form>
         <Link className="login__text" to="/login">
          Have an Account?
        </Link>
       </div>
     </div>
    );
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to="/surveyEditor" />
      );
    }
    return (
      <div>
        <Header title={'Signup'} />
        {this.state.error ? <ErrorMessage errorMessage={this.state.error} /> : null}
        {this.renderForm()}
      </div>
    );
  }
}

Signup.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default createContainer(() => ({
  createUser: Accounts.createUser
}), Signup);
