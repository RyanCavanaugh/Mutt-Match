import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import store from './store';

import App from './components/app';
import Index from './components/index';
import Login from './components/login';
import Signup from './components/signup';
import DogSignup from './components/dog-signup';
import ProfilePic from './comporacomponents/profile-pic';


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
      <Route path="dog-signup" component={DogSignup} onEnter={requireNotAuth} />
      <Route path="signup" component={Signup} onEnter={requireNotAuth} />
      <Route path="pic" component={Profile} onEnter={requireNotAuth} />
    </Route>

  </Router>
), document.getElementById('application'));
