import React from 'react';
import PropTypes from 'prop-types';

const FormChoice = ({ updateResponses, handleResponse }) => (
  <div className="item">
    <div className="form">
      <input
        className="form__input"
        type="text" name="radioboxes"
        onChange={updateResponses}
        placeholder="Add your choices..."
      />
      <button className="button" onClick={handleResponse} type="submit">Add Choice</button>
    </div>
  </div>
);
FormChoice.propTypes = {
  updateResponses: PropTypes.func,
  handleResponse: PropTypes.func
};
export default FormChoice;
