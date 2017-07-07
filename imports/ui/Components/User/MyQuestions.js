import React from 'react';
import PropTypes from 'prop-types';

const MyQuestions = ({ viewID, message }) => (
  <div className="form__share">
    <p>{message}</p>
    <div className="form__share__buttons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://localhost:3000/question/${viewID}`}
      >Share</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://localhost:3000/charts/${viewID}`}
      >Visualize</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://localhost:3000/charts/${viewID}`}
      >Generate QR</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor button__remove"
        href={`http://localhost:3000/charts/${viewID}`}
      >Remove</a>
    </div>
  </div>
);

MyQuestions.propTypes = {
  viewID: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default MyQuestions;
