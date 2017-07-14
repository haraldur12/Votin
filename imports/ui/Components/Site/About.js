import React from 'react';
import Header from '../Header';

const About = () => (
  <div>
    <Header title={'About'} />
    <div className="about__container">
      <div className="about__intro">
        <p className="about__text">Votin lets decision process fast & efficient.</p>
        <ul className="about__list">
          <li className="about__list__item">Do you want to vote on something and get instant results ? </li>
          <li className="about__list__item">Going on holidays with friends and cannot make a decision ? </li>
        </ul>
        <p className="about__text">You can use votin for fact checking.</p>
        <ul className="about__list">
          <li className="about__list__item">Curious whether the news is true or not ? Well ask people who might know. </li>
          <li className="about__list__item">Validate the credibility of your source by asking the public.</li>
        </ul>
        <p className="about__text">Votin while business meetings.</p>
        <ul className="about__list">
          <li className="about__list__item">Vote business related matters in matters of seconds.</li>
          <li className="about__list__item">See the realtime results.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
