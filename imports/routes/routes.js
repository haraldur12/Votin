import { Router, Route, IndexRoute, browserHistory } from 'react-router-dom'
import App from "./../ui/App"


export const renderRoutes = () => (
   <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
);
