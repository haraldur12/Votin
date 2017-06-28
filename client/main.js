import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { renderRoutes } from '../imports/routes/routes';

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(renderRoutes(), document.getElementById('app'));
  });
});
