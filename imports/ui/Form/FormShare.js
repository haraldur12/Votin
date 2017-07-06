import React from 'react';
import PropTypes from 'prop-types';

const FormShare = ({ viewID }) => (
  <div>
    <p className="item item__message">You have successfully submitted your form.
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
    </p>
  </div>
);

FormShare.propTypes = {
  viewID: PropTypes.string.isRequired
};

export default FormShare;
