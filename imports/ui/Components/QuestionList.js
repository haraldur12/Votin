import React from 'react';
import PropTypes from 'prop-types';

import MyQuestions from './User/MyQuestions';


const QuestionList = ({ question, id, questionIndex, privacy }) => (
  <div className="wrapper">
    <MyQuestions privacy={privacy} questionIndex={questionIndex} viewID={id} question={question} />
  </div>
);

QuestionList.propTypes = {
  question: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired

};

export default QuestionList;
