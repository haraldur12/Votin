import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

import { Questions } from '../../api/Questions';
import Header from '../Components/Header';
import QuestionBox from '../Components/QuestionBox';

const QRPage = props => (
  <div>
    <Header title={'QR Code'} />
    <div className="wrapper">
      <QuestionBox question={props.questions ? props.questions.question : 'This is not a valid question url.'} />
      <div className="qrcode">
        <QRCode value={`http://quanti.herokuapp.com/question/${props.currentQuestionID}`} />
      </div>
    </div>
  </div>
);

QRPage.propTypes = {
  questions: PropTypes.object,
  currentQuestionID: PropTypes.string
};

export default createContainer((props) => {
  Meteor.subscribe('questions');
  return {
    questions: Questions.findOne({ _id: props.match.params.id }),
    currentQuestionID: props.match.params.id
  };
}, QRPage);
