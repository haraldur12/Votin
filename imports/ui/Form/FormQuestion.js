import React from 'react';
import PropTypes from 'prop-types';

const FormQuestion = ({ updateQuestion, handleQuestion }) => (
  <div className="item">
    <div className="form">
      <input
        maxLength="240"
        className="form__input"
        type="text" name="question"
        onChange={updateQuestion}
        placeholder="Question"
      />
      <button
        className="button"
        onClick={handleQuestion}
        type="submit"
      >
        Add Question</button>
    </div>
  </div>
);
FormQuestion.propTypes = {
  updateQuestion: PropTypes.func,
  handleQuestion: PropTypes.func
};
export default FormQuestion;
