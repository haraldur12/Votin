import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./../ui/App"
import ViewData from "./../ui/Charts/ViewData";

import CurrentQuestion from './../ui/CurrentQuestion';

export const renderRoutes = () => (
   <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/question/:id" component={CurrentQuestion}/>
      <Route path="/charts/:id" component={ViewData}/>
    </div>
  </Router>
);
