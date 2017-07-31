// SET UP THE APP ENTRY POINT BELOW
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './assets/css/style.css';

import PortalPage from './components/PortalPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserHomePage from './components/UserHomePage';
import SearchUsersPage from './components/SearchUsersPage';
import EditUserPage from './components/EditUserPage';
import CreateGearPage from './components/CreateGearPage';
import EditGearPage from './components/EditGearPage';

// DESIGN THE ROUTES FOR EACH COMPONENT PAGE - EMBEDDED COMPONENTS DO NOT RECEIVE SEPARATE ROUTES
render(
  <Router history={browserHistory}>
    <Route path="/" component={PortalPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/users/:user_id" component={UserHomePage} />
    <Route path="/users/:user_id/edit" component={EditUserPage} />
    <Route path="/users/:user_id/gear/new" component={CreateGearPage} />
    <Route path="/users/:user_id/gear/:gear_id/edit" component={EditGearPage} />
    <Route path="/users" component={SearchUsersPage} />
  </Router>
  , document.getElementById('app')
);
