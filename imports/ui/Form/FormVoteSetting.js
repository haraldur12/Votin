import React from 'react';
import PropTypes from 'prop-types';

const FormVoteSetting = ({ handleSetting }) => (
  <div className="item">
    <p className="item__message">
      Limit the voting process to authenticated users?
   </p>
    <div className="form">
      <span>Yes</span>
      <input
        className="form__input"
        type="radio"
        name="radio"
        onClick={handleSetting}
        placeholder="Add your choices..."
        value="true"
      />
      <span>No</span>
      <input
        className="form__input"
        type="radio"
        name="radio"
        onClick={handleSetting}
        placeholder="Add your choices..."
        value="false"
      />
    </div>
  </div>
);
FormVoteSetting.propTypes = {
  handleSetting: PropTypes.func
};
export default FormVoteSetting;
