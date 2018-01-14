import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import { withRouter } from 'react-router';

import Tenant from './Tenant';
import config from '../config';

class Decide extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    tenant: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { user } = this.props;
    if (!user.id) {
      this.props.history.push({
        pathname: '/user/signin',
        state: { cb: '/user/decide' },
      });
    }
  }

  render() {
    const { user } = this.props;
    if (!user.id) {
      return <div/>;
    }
    return (
      <div className="user-form-content">
        <h2 className={ `ui ${config.theme} image header` }>
          <img src="/static/images/logo.png" className="image" alt="" style={ { borderRadius: '4px' } } />
          <div className="content">
            {'授权'}
          </div>
        </h2>
        <Tenant/>
        <form className="ui form buttons" method="post" action="/user/decide">
          <Link className={ 'ui gray fluid button' } to={ {
            pathname: '/user/signout',
            state: { cb: '/user/decide' },
          } }
          >切换用户</Link>
          <input className={ 'ui blue fluid submit button' } type="submit" value="确定" />
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.toJSON().user,
    tenant: state.user.toJSON().tenant,
    busy: state.asyncStatus.toJSON().USER_SIGNIN_BUSY,
  };
};

export default withRouter(connect(mapStateToProps)(Decide));
