import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import config from '../../../../config';

class FrontPanel extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="ui inverted vertical masthead center aligned transparent segment">
        <div className="front_panel_back">
          <div className="front_panel_overlay"></div>
          <div className="ui text container">
            <h1 className="ui inverted header">
              {config.title}
            </h1>
            <h2>Do whatever you want when you want to.</h2>
            {/* <a className="ui huge primary button" href="/apps/notebook">Get Started <i className="right arrow icon"></i></a> */}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FrontPanel));
