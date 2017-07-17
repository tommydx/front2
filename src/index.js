// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import PortalPage from './components/PortalPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserHomePage from './components/UserHomePage';
import EditUserPage from './components/EditUserPage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={PortalPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/users/:user_id" component={UserHomePage} />
    <Route path="/users/:user_id/edit" component={EditUserPage} />
  </Router>
  , document.getElementById('app')
);
