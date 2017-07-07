import React from 'react';
import PropTypes from 'prop-types';

import MyQuestions from './User/MyQuestions';


const QuestionList = ({ question, id }) => (
  <div className="wrapper">
    <MyQuestions viewID={id} message={question} />
  </div>
);

QuestionList.propTypes = {
  question: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default QuestionList;
