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
        href={`https://quanti.herokuapp.com/question/${viewID}`}
      >Share</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`https://quanti.herokuapp.com/charts/${viewID}`}
      >Visualize</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`https://quanti.herokuapp.com/charts/${viewID}`}
      >Generate QR</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor button__remove"
        href={`https://quanti.herokuapp.com/charts/${viewID}`}
      >Remove</a>
    </div>
  </div>
);

MyQuestions.propTypes = {
  viewID: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default MyQuestions;
