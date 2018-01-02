import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class FixedMenu extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  }

  render() {
    const { user } = this.props;
    return (
      <div className={ 'ui huge inverted secondary home  menu' } style={ { margin: 0, borderBottom: '1px solid white' } }>
        <div className="ui container">
          <Link className="active icon item" to='/'>
            <div className="ui content">
              <i className="icon home"></i>
              主页
            </div>
          </Link>
          <a className="icon item" href='/apps/notebook'>
            <div className="ui content">
              <i className="icon book"></i>
              笔记
            </div>
          </a>
          <a className="icon item" href='/apps/disk'>
            <div className="ui content">
              <i className="icon cloud outline"></i>
              网盘
            </div>
          </a>
          <div className="right menu">
            {user.success ?
              <Link className="icon item" to='/user/password'>
                <div className="ui content">
                  <i className="icon user outline"></i>
                  {user.username}
                </div>
              </Link>
              : ''}
            {user.success ?
              <Link className="icon item" to='/user/signout'>
                <div className="ui content">
                  <i className="icon sign out"></i>
                  登出
                </div>
              </Link> : ''}
            {user.success ? '' :
            <Link className="icon item" to='/user/signin'>
              <div className="ui content">
                <i className="icon sign in"></i>
                登入
              </div>
            </Link>}
            {user.success ? '' :
            <Link className="icon item" to='/user/signup'>
              <div className="ui content">
                <i className="icon smile"></i>
                注册
              </div>
            </Link>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.toJSON().user,
});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FixedMenu));
