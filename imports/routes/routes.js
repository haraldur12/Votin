import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SurveyStarter from './../ui/Layouts/SurveyStarter';
import Home from './../ui/Layouts/Home';
import UserPage from './../ui/Layouts/User';

import ViewData from './../ui/Charts/ViewData';
import ThankPage from './../ui/Components/ThankPage';
import NotFound from './../ui/Components/NotFound';
import Logout from './../ui/Components/User/Logout';

import About from './../ui/Components/Site/About';
import How from './../ui/Components/Site/How';
import Tos from './../ui/Components/Site/Tos';
import Developer from './../ui/Components/Site/Developer';

import QuestionDo from './../ui/Pages/QuestionDo';
import Signup from './../ui/Pages/Signup';
import GeneratePDF from './../ui/Pages/GeneratePDF';
import Login from './../ui/Pages/Login';
import QRPage from './../ui/Pages/QRPage';
import QuestionEmbed from './../ui/Pages/QuestionEmbed';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/surveyEditor" component={SurveyStarter} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/about" component={About} />
      <Route path="/how" component={How} />
      <Route path="/tos" component={Tos} />
      <Route path="/developer" component={Developer} />
      <Route path="/user/questions" component={UserPage} />
      <Route path="/pdf/:id" component={GeneratePDF} />
      <Route path="/question/:id" component={QuestionDo} />
      <Route path="/embed/question/:id" component={QuestionEmbed} />
      <Route path="/charts/:id" component={ViewData} />
      <Route path="/qr/:id" component={QRPage} />
      <Route path="/done" component={ThankPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
