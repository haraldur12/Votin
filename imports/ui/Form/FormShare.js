import React from 'react';
import PropTypes from 'prop-types';

const FormShare = ({ viewID }) => (
  <div className="form__share">
    <p>You have successfully submitted your form.</p>
    <div className="form__share__buttons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://quanti.herokuapp.com//question/${viewID}`}
      >Share</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://quanti.herokuapp.com//charts/${viewID}`}
      >Visualize</a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button button--anchor"
        href={`http://quanti.herokuapp.com//charts/${viewID}`}
      >Generate QR</a>
    </div>
  </div>
);

FormShare.propTypes = {
  viewID: PropTypes.string.isRequired
};

export default FormShare;
