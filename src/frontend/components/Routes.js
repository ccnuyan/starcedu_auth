import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Message from './common/Message';

import Home from './Home';
import User from './User';
import NotFound from './NotFound';
import OAuthCallback from './OAuthCallback';


class Routes extends Component {
  componentDidMount() {
    $('#cssload-thecube').css({ display: 'none' });
  }
  render = () => {
    return (
      <Router>
        <div>
          <AnimatedSwitch
            atEnter={ { opacity: 0 } }
            atLeave={ { opacity: 0 } }
            atActive={ { opacity: 1 } }
            runOnMount={ true }
          >
            <Route component={ Home } path='/' exact={ true }></Route>
            <Route component={ User } path='/user'></Route>
            <Route component={ OAuthCallback } path='/oauth/callback/*'></Route>
            <Route component={ NotFound } path='/*'></Route>
          </AnimatedSwitch>
          <Message />
        </div>
      </Router>
    );
  }
}

export default Routes;

