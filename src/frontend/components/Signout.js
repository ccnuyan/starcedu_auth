import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import userActions from '../../store/actions/userActions';
import config from '../config';
import Busy from './Busy';

class Signout extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    busy: PropTypes.bool.isRequired,
    signout: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    this.props.signout();
  };

  componentDidUpdate(prevProps) {
    const { busy, location } = this.props;
    if (!busy && prevProps.busy) {
      setTimeout(() => {
        if (location.state && location.state.cb) {
          this.props.history.push(location.state.cb);
        } else {
          this.props.history.push('/');
        }
      }, 2000);
    }
  }

  render = () => {
    const { busy } = this.props;
    return (
      <div className="user-form-content">
        <h2 className={ `ui ${config.theme} image header` }>
          <img src="/static/images/logo.png" className="image" alt="" />
          <div className="content">
          登出
        </div>
        </h2>
        <Busy isBusy={ busy } header={ busy ? '正在登出...' : '已登出' } content={ busy ? '登出后会跳转至主页' : '正在跳转...' }/>
      </div>);
  };
}

const mapStateToProps = state => ({
  user: state.user.toJSON().user,
  busy: state.asyncStatus.toJSON().USER_SIGNOUT_BUSY,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {
      dispatch(userActions.signout());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signout));
