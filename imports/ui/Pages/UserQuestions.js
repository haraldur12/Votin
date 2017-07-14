import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Questions } from '../../api/Questions';
import QuestionList from '../Components/QuestionList';
import Message from '../Components/Message';

class UserQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.renderQuestions = this.renderQuestions.bind(this);
  }
  renderQuestions() {
    if (this.props.questions.length <= 0) { 
      return (<Message message={'You do not have any questions yet.'} />);
    }
    return this.props.questions.map((question, index) => {
      const questionToRender = question.question;
      return (<QuestionList
        questionIndex={index + 1}
        key={index}
        question={questionToRender}
        id={question._id}
        privacy={question.private}
      />);
    });
  }
  render() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
}

UserQuestions.propTypes = {
  questions: PropTypes.array
};

export default createContainer(() => {
  Meteor.subscribe('UserQuestions', Meteor.userId());
  return {
    questions: Questions.find({ userId: Meteor.userId() }).fetch()
  };
}, UserQuestions);
