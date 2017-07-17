// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import PortalPage from './components/PortalPage';
import SignUp from './components/SignUp';

render(
  <Router history={browserHistory}>
    <Route path="/" component={PortalPage} />
    <Route path="/SignUp" component={SignUp} />
  </Router>
  , document.getElementById('app')
)
