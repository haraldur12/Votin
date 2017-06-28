import React from 'react';
import PropTypes from 'prop-types';

const FormCreate = ({ submitForm, message }) => (
  <div>
    <form className="form" onSubmit={submitForm}>
      <button className="button" type="submit">{message}</button>
    </form>
  </div>
);
FormCreate.propTypes = {
  submitForm: PropTypes.func,
  message: PropTypes.string
};
export default FormCreate;
