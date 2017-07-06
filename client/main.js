import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { renderRoutes } from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
