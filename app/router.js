import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import store from './store';

import App from './components/app';
import Index from './components/index';
import Login from './components/login';
import Signup from './components/signup';
import DogSignup from './components/dog-signup';
import ViewUsers from './components/view-users';
import ViewUserProfile from './components/view-user-profile';

function requireAuth(nextState, replaceState) {
  if( ! store.getSession().isAuthenticated) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

function requireNotAuth(nextState, replaceState) {
  if(store.getSession().isAuthenticated) {
    replaceState({}, '/');
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} onEnter={requireAuth} />
      <Route path="login" component={Login} onEnter={requireNotAuth} />
      <Route path="profile" component={Index} onEnter={requireAuth} />
      <Route path="profile/:id" component={ViewUserProfile} onEnter={requireAuth} /> //nested route?
      <Route path="dog-signup" component={DogSignup} onEnter={requireNotAuth} />
      <Route path="signup" component={Signup} onEnter={requireNotAuth} />
      <Route path="view-users" component={ViewUsers} onEnter={requireAuth} />
    </Route>

  </Router>
), document.getElementById('application'));
