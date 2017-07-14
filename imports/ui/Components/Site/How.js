import React from 'react';
import Header from '../Header';
import Point from 'react-icons/lib/md/panorama-fish-eye';

const How = () => (
  <div>
    <Header title={'About'} />
    <div className="about__container">
      <div className="about__intro">
        <p className="about__text">Creating Votes</p>
        <ul className="about__list">
          <li className="about__list__item"><Point /> Register </li>
          <li className="about__list__item"><Point /> Start creating question.</li>
          <li className="about__list__item"><Point /> That's all.</li>
        </ul>
        <p className="about__text">Sharing</p>
        <ul className="about__list">
          <li className="about__list__item"><Point /> Generate a QR. </li>
          <li className="about__list__item"><Point /> Export as PDF.</li>
          <li className="about__list__item"><Point /> Share direct link.</li>
        </ul>
        <p className="about__text">Privacy </p>
        <ul className="about__list">
          <li className="about__list__item"><Point /> Lock your questions.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default How;
