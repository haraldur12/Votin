import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './../ui/App';
import ViewData from './../ui/Charts/ViewData';
import ThankPage from './../ui/ThankPage';

import QuestionDo from './../ui/QuestionDo';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/question/:id" component={QuestionDo} />
      <Route path="/charts/:id" component={ViewData} />
      <Route path="/done" component={ThankPage} />
    </Switch>
  </Router>
);
