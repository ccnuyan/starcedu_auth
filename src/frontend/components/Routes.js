import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Message from './common/Message';

import Home from './Home';
import User from './User';
import NotFound from './NotFound';
import CallbackRedirect from './CallbackRedirect';


class Routes extends Component {
  componentDidMount() {
    $('#cssload-thecube').css({ display: 'none' });
  }
  render = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route component={ Home } path='/' exact={ true }></Route>
            <Route component={ CallbackRedirect } path='/callback_redirect'></Route>
            <Route component={ CallbackRedirect } path='/oauth/callback/*'></Route>
            <Route component={ CallbackRedirect } path='/user/authorize'></Route>
            <Route component={ User } path='/user'></Route>
            <Route component={ NotFound } path='/*'></Route>
          </Switch>
          <Message />
        </div>
      </Router>
    );
  }
}

export default Routes;

