import React from 'react';
import PropTypes from 'prop-types';

const FormCreate = ({ submitForm }) => (
  <div>
    <form className="form" onSubmit={submitForm}>
      <button className="button" type="submit">Create Form</button>
    </form>
  </div>
);
FormCreate.propTypes = {
  submitForm: PropTypes.func
};
export default FormCreate;
