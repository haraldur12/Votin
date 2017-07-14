import React from 'react';
import Header from './Header';

const Private = ({ question }) => (
  <div>
    <Header title={question} />
    <div className="private" />
    <p className="private__text">Private Question</p>
  </div>
);

export default Private;
