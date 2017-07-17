// Set up your application entry point here...
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import PortalPage from './components/PortalPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserHomePage from './components/UserHomePage';
import EditUserPage from './components/EditUserPage';
import CreateGearPage from './components/CreateGearPage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={PortalPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/users/:user_id" component={UserHomePage} />
    <Route path="/users/:user_id/edit" component={EditUserPage} />
    <Route path="/users/:user_id/gear/new" component={CreateGearPage} />
  </Router>
  , document.getElementById('app')
);
