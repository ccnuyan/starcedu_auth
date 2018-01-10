import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Signin from './Signin';
import Signup from './Signup';
import Signout from './Signout';
import Password from './Password';
import Decide from './Decide';

class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  render = () => {
    const { location } = this.props;
    return (
      <AnimatedSwitch
          atEnter={ { opacity: 0 } }
          atLeave={ { opacity: 0 } }
          atActive={ { opacity: 1 } }
          className="user-form main-route-content"
      >
        <Route location={ location } component={ Signin } path='/user/signin' exact={ true }></Route>
        <Route location={ location } component={ Signup } path='/user/signup' exact={ true }></Route>
        <Route location={ location } component={ Signout } path='/user/signout' exact={ true }></Route>
        <Route location={ location } component={ Decide } path='/user/decide' exact={ true }></Route>
        <Route location={ location } component={ Password } path='/user/password' exact={ true }></Route>
      </AnimatedSwitch>
    );
  }
}

export default withRouter(Home);
