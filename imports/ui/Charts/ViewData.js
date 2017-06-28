import React from 'react';
import PropTypes from 'prop-types';

import Header from './../Components/Header';
import ChartIndex from './ChartIndex';
// with arrow functions it does not access the params.id
export default function ViewData(props) {
  return (
    <div>
      <Header title="Showing results for your question" />
      <ChartIndex id={props.match.params.id} />
    </div>
  );
}

ViewData.propTypes = {
  match: PropTypes.object
};
