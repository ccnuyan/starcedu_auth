import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import EmailField from './common/user/EmailField';
import PasswordField from './common/user/PasswordField';
import OAuthProviders from './common/user/OAuthProviders';
import userActions from '../../store/actions/userActions';
import QQInfo from './common/user/oauth/QQInfo';

import init from '../initFormValidation';

class Signup extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    oauthUser: PropTypes.object.isRequired,
    submitInfo: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
    setSubmitMode: PropTypes.func.isRequired,
    busy: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
  }

  componentDidMount() {
    init();
    this.props.setSubmitMode();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if ($(this.form).form('is valid')) {
      this.props.signup(this.props.submitInfo);
    }
  }

  render() {
    const { user, oauthUser } = this.props;
    if (user.success) {
      if (!user.callback || user.callback === '/') {
        return (<Redirect to={ { pathname: '/' } }/>);
      }
      return window.location.replace(user.callback);
    }
    return (
      <div className="user-form-content">
        <h2 className="ui teal image header">
          <img src="/static/images/logo.png" className="image" alt="" style={ { borderRadius: '4px' } } />
          <div className="content">
            {oauthUser.id ? '注册' : '注册'}
          </div>
        </h2>
        {this.props.oauthUser.id ? <QQInfo/> : ''}
        <div className="ui divider"></div>
        <form ref={ e => this.form = e } className={ `ui form ${this.props.busy ? 'loading' : ''}` } onSubmit={ this.onFormSubmit }>
          <div className="ui segment">
            <EmailField />
            <PasswordField name='password' placeholder="密码" />
            <PasswordField name='confirm_password' placeholder="确认密码" />
            <button className="ui fluid teal submit button" type="submit">注册</button>
          </div>
          <div className="ui error message">
          </div>
        </form>
        <OAuthProviders />
        <div className="ui divider"></div>
        <div>
          <i className="pointing right grey icon"></i>
            已注册过？
          <Link to='/user/signin' href="">{this.props.oauthUser.id ? '绑定已有账户' : '去登入'}</Link>
        </div>
        <div>
          <i className="pointing right grey icon"></i>
          <Link className='ui right floated' to='/'>返回主页</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.toJSON().user,
  oauthUser: state.user.toJSON().oauthUser,
  submitInfo: state.user.toJSON().submitInfo,
  busy: state.asyncStatus.toJSON().USER_SIGNUP_BUSY,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (info) => {
      dispatch(userActions.signup(info));
    },
    setSubmitMode: () => {
      userActions.setSubmitMode(dispatch, 'signup');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
