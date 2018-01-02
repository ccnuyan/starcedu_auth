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

class Signin extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    oauthUser: PropTypes.object.isRequired,
    submitInfo: PropTypes.object.isRequired,
    busy: PropTypes.bool.isRequired,
    setSubmitMode: PropTypes.func.isRequired,
    signin: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }

  componentDidMount() {
    init();
    this.props.setSubmitMode();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if ($(this.form).form('is valid')) {
      this.props.signin(this.props.submitInfo);
    }
  }

  render() {
    const { user } = this.props;
    if (user.success) {
      if (!user.callback || user.callback === '/') {
        return (<Redirect to={ { pathname: '/' } }/>);
      }
      return window.location.replace(user.callback);
    }
    return (
      <div className="user-form-content">
        <h2 className="ui teal image header">
          <img src="/static/images/logo.png" className="image" alt="" style={ { borderRadius: '4px' } }/>
          <div className="content">
            {'登入'}
          </div>
        </h2>
        {this.props.oauthUser.id ? <QQInfo/> : ''}
        <div className="ui divider"></div>
        <form ref={ e => this.form = e } className={ `ui form ${this.props.busy ? 'loading' : ''}` } onSubmit={ this.onFormSubmit }>
          <div className="ui segment">
            <EmailField/>
            <PasswordField name='password' placeholder="密码"/>
            <button className="ui fluid teal submit button" type="submit">登入</button>
          </div>
          <div className="ui error message">
          </div>
        </form>
        <OAuthProviders/>
        <div className="ui divider"></div>
        <div>
          <i className="pointing right grey icon"></i>
          尚未注册？
          <Link to='/user/signup' >去注册!</Link>
        </div>
        <div>
          <i className="pointing right grey icon"></i>
          忘记密码？
          <span to='/user/signup' >去找回!(未实现)</span>
        </div>
        <div>
          <i className="pointing right grey icon"></i>
          <Link className='ui right floated' to='/'>返回主页</Link>
        </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  user: state.user.toJSON().user,
  oauthUser: state.user.toJSON().oauthUser,
  submitInfo: state.user.toJSON().submitInfo,
  busy: state.asyncStatus.toJSON().USER_SIGNIN_BUSY,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (info) => {
      dispatch(userActions.signin(info));
    },
    setSubmitMode: () => {
      userActions.setSubmitMode(dispatch, 'signin');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
