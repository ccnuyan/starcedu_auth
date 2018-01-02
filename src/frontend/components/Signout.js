import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  Link,
} from 'react-router-dom';
import userActions from '../../store/actions/userActions';

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
    if (!this.props.busy && prevProps.busy) {
      setTimeout(() => {
        this.props.history.push('/');
      }, 2000);
    }
  }

  render = () => {
    return (
      <div className="user-form-content">
        <h2 className="ui teal image header">
          <img src="/static/images/logo.png" className="image" alt="" />
          <div className="content">
          登出
        </div>
        </h2>
        <div className={ 'ui left aligned icon message' }>
          {this.props.busy ? <i className="notched circle loading icon"></i> : <i className="green check icon"></i>}
          {this.props.busy ? <div className="content" style={ { textAlign: 'left' } }>
            <div className="header">
            正在登出...
          </div>
            <p>登出后会跳转至主页</p>
          </div> : <div className="content" style={ { textAlign: 'left' } }>
            <div className="header">
            已登出
          </div>
            <p>正在跳转至主页</p>
          </div>}
        </div>
        <div className="ui divider"></div>
        <div>
          <i className="pointing right grey icon"></i>
          <Link className='ui right floated' to='/'>立刻返回主页</Link>
        </div>
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
