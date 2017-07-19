import React from 'react';
import Header from '../Header';

const Developers = () => (
  <div>
    <Header title={'Developers'} />
    <div className="about__container">
      <div className="about__intro">
        <p className="about__text">How to make use of Votin in your projects ?</p>
        <ul className="about__list">
          <li className="about__list__item">
            Current version of Votin lets you embed questions directly in your pages.
            You can use iframes to directly render the question box into your page so that
            people who browse your pages can vote through your page.
          </li>
        </ul>
        <p className="about__text">Embedding the votes:</p>
        <ul className="about__list">
          <li className="about__list__item">
            Embedding the votes is very simple.

            Copy the code down below. When you are doing it grap the id of the question.
          </li>
          <textarea
            className="codearea"
            value="<iframe width='280' height='250' src='http://localhost:3000/embed/question/gXnswE9aGcBt25GCH'></iframe>"
          />
        </ul>
        <p className="about__text">Embedded view of votes:</p>
        <ul className="about__list">
          <li className="about__list__item">
            <iframe width="280" height="250" src="http://localhost:3000/embed/question/gXnswE9aGcBt25GCH" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Developers;
