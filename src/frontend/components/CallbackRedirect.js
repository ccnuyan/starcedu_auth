import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class CallbackRedirect extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    tenant: PropTypes.object.isRequired,
    oauthUser: PropTypes.object.isRequired,
    callback: PropTypes.string,
  }

  render() {
    const { user, tenant, oauthUser, callback } = this.props;

    if (tenant && tenant.id) {
      return <Redirect to={ '/user/decide' }/>;
    }

    if (oauthUser && oauthUser.id) {
      return <Redirect to={ '/user/signin' }/>;
    }

    if (user && user.id) {
      if (callback) {
        if (callback.startsWith('/')) {
          return <Redirect to={ callback }/>;
        }
        return window.replace(callback);
      }
    }

    return <Redirect to={ '/' }/>;
  }
}

const mapStateToProps = state => ({
  user: state.user.toJSON().user,
  tenant: state.user.toJSON().tenant,
  oauthUser: state.user.toJSON().oauthUser,
  callback: state.user.toJSON().callback,
});

export default withRouter(connect(mapStateToProps)(CallbackRedirect));
