import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Footer from './common/Footer';
import FrontPanel from './common/FrontPanel';
import HomeMenu from './common/HomeMenu';

import WebApps from './includes/WebApps';
import Slogan1 from './includes/Slogan1';
import Slogan2 from './includes/Slogan2';
import DesktopApps from './includes/DesktopApps';
import Others from './includes/Others';
import config from '../config';


class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    $('#main')
    .visibility({
      context: $('.home-route'),
      once: false,
      onTopVisible() {
        $('.home.menu').css({ background: 'transparent', height: '150px', borderBottom: '0px' });
      },
      onTopPassed() {
        $('.home.menu').css({ background: '', height: '64px', borderBottom: '1px solid white' }).addClass(config.theme);
      },
    });

    $('.masthead')
    .visibility({
      context: $('.home-route'),
      once: false,
      onUpdate(calculations) {
        $('.front_panel_overlay').css({ opacity: 0.6 + (calculations.percentagePassed * 0.4) });
        $('.front_panel_back>.ui.text.container').css({
          bottom: `${(-calculations.percentagePassed * 400)}px`,
          opacity: 1 - (calculations.percentagePassed * 2),
        });
      },
    })
  ;
  }

  render = () => {
    return (
      <div className="home-route main-route-content">
        <div className="home-content">
          <FrontPanel />
          <div ref={ e => this.main = e } id="main" style={ { margin: '-300px 0 0 0', width: '100%', position: 'absolute' } }></div>
          <WebApps/>
          <Slogan1/>
          <DesktopApps />
          <Slogan2/>
          <Others />
          <Footer />
        </div>
        <HomeMenu />
      </div>
    );
  }
}

export default withRouter(Home);
