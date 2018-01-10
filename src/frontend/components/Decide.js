import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Redirect,
} from 'react-router-dom';

import config from '../config';

class Decide extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    tenant: PropTypes.object.isRequired,
  }

  render() {
    const { user, tenant } = this.props;
    if (!user.success) {
      return (<Redirect to={ { pathname: '/user/signin' } } />);
    }
    return (
      <div className="user-form-content">
        <h2 className={ `ui ${config.theme} image header` }>
          <img src="/static/images/logo.png" className="image" alt="" style={ { borderRadius: '4px' } } />
          <div className="content">
            {'授权'}
          </div>
        </h2>
        <div className="ui message">
          <div className="ui content">
            {user.username}, 您好，您将使用的此账户登陆应用：{tenant.title}
          </div>
        </div>
        <form className="ui form" method="post" action="/user/decide">
          <input className={ `ui ${config.theme} fluid submit button` } type="submit" value="确定" />
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => {
  console.log(state.user.toJSON());
  return {
    user: state.user.toJSON().user,
    tenant: state.user.toJSON().tenant,
    busy: state.asyncStatus.toJSON().USER_SIGNIN_BUSY,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // signin: (info) => {
    //   dispatch(userActions.signin(info));
    // },
    // setAutoSignin: (value) => {
    //   userActions.setAutoSignin(dispatch, value);
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Decide);
