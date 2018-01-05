import React, { Component } from 'react';

import config from '../../config';

class Footer extends Component {
  static propTypes = {
    // prop: PropTypes,
  }

  render() {
    return (
      <div className={ `ui ${config.theme} inverted vertical footer segment ` }>
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Source</h4>
              <div className="ui inverted link list">
                <a className="item" href="http://www.github.com/ccnuyan/starcedu_auth/tree/develop">Github</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Tech & Tools</h4>
              <div className="ui inverted link list">
                <a className="item" href="https://reactjs.org/">React.js</a>
                <a className="item" href="https://semantic-ui.com/modules/transition.html">Semantic UI</a>
                <a className="item" href="https://reacttraining.com/react-router/">React Router</a>
                <a className="item" href="https://redux.js.org/docs/introduction/">Redux</a>
                <a className="item" href="https://regexr.com/">Regexr</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Tools</h4>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

