import React from 'react';
import Header from '../Header';

const Tos = () => (
  <div>
    <Header title={'Terms of Service'} />
    <div className="about__container">
      <div className="about__intro">
      <p className="about__text">Votin Terms of Service and Privacy Policy</p>
    </div>
      <div className="about__intro">
        <p className="about__text">1. Terms</p>
        <ul className="about__list">
          <li className="about__list__item">By accessing the web site at Votin, you are agreeing to be bound by these web site Terms and Conditions of Use,
            all applicable laws and regulations, and agree that you are responsible for
            compliance with any applicable local laws. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trademark law.
</li>
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

export default Tos;
