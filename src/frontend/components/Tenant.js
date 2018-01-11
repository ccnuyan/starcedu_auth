import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tenant extends Component {
  static propTypes = {
    tenant: PropTypes.object.isRequired,
  }

  render() {
    const { tenant } = this.props;
    if (!tenant.id) {
      return <div/>;
    }
    return <div className="ui message">
      <div className="ui header">
        授权来自 <a href={ tenant.home_url }>{tenant.title}</a> 的登入请求
        </div>
      <div className="ui content">
        {tenant.description}
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  tenant: state.user.toJSON().tenant,
});


export default connect(mapStateToProps)(Tenant);
