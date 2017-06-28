import React from 'react';
import PropTypes from 'prop-types';


const QuestionBox = ({ question }) => (
  <div>
    {question ?
      <div className="item">
        <h1>Question</h1>
        <p className="item__question">{question}</p>
      </div> : null}
  </div>
);

QuestionBox.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuestionBox;
