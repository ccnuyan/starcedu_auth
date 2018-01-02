import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Message from './common/Message';

import Home from './Home';
import User from './User';
import NotFound from './NotFound';


const Routes = () => {
  return (
    <Router>
      <div>
        <AnimatedSwitch
        atEnter={ { opacity: 0 } }
        atLeave={ { opacity: 0 } }
        atActive={ { opacity: 1 } }
        >
          <Route component={ Home } path='/' exact={ true }></Route>
          <Route component={ User } path='/user'></Route>
          <Route component={ NotFound } path='/*'></Route>
        </AnimatedSwitch>
        <Message />
      </div>
    </Router>
  );
};

export default Routes;

