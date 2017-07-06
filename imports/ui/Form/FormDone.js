import React from 'react';
import PropTypes from 'prop-types';

const FormDone = ({ handleStatus }) => (
  <div>
    <p className="item__message">
     You must fill in the form before submitting. It should have at least two choices.
   </p>
    <button className="button button--submit" onClick={handleStatus}>Done!</button>
  </div>
);

FormDone.propTypes = {
  handleStatus: PropTypes.func
};

export default FormDone;
