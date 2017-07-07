import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Questions } from '../../api/Questions';
import QuestionList from '../Components/QuestionList';

class UserQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.renderQuestions = this.renderQuestions.bind(this);
  }
  renderQuestions() {
    return this.props.questions.map((question, index) => {
      const questionToRender = question.question;
      return <QuestionList key={index} question={questionToRender} id={question._id} />;
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderQuestions()}
        </ul>
      </div>
    );
  }
}

UserQuestions.propTypes = {
  questions: PropTypes.array
};

export default createContainer(() => {
  Meteor.subscribe('questions');
  return {
    questions: Questions.find({ userId: Meteor.userId() }).fetch()
  };
}, UserQuestions);
