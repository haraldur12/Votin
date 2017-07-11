import React from 'react';
import PropTypes from 'prop-types';
import MdAdd from 'react-icons/lib/md/add'

const FormChoice = ({ updateResponses, handleResponse }) => (
  <div className="item">
    <div className="form">
      <input
        className="form__input"
        type="text" name="radioboxes"
        onChange={updateResponses}
        placeholder="Add your choices..."
      />
      <button className="button" onClick={handleResponse} type="submit"><MdAdd /></button>
    </div>
  </div>
);
FormChoice.propTypes = {
  updateResponses: PropTypes.func,
  handleResponse: PropTypes.func
};
export default FormChoice;
