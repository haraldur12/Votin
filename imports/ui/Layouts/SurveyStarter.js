import React from 'react';

import Header from '../Components/Header';
import AddQuestion from '../Pages/AddQuestion';

const SurveyStarter = () => (
  <div>
    <Header title="Quantilope" />
    <div className="wrapper">
      <AddQuestion />
    </div>
  </div>
);


export default SurveyStarter;
