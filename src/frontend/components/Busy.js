import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Busy extends Component {
  static propTypes = {
    isBusy: PropTypes.bool.isRequired,
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  render() {
    if (this.props.isBusy) {
      return (<div className={ 'ui left aligned icon message' }>
        <i className="notched circle loading icon"></i>
        <div className="content" style={ { textAlign: 'left' } }>
          <div className="header">
            {this.props.header}
          </div>
          <p>
            {this.props.header}
          </p>
        </div>
      </div>);
    }

    return (<div className={ 'ui left aligned icon message' }>
      <i className="green check icon"></i>
      <div className="content" style={ { textAlign: 'left' } }>
        <div className="header">
          {this.props.header}
        </div>
        <p>
          {this.props.header}
        </p>
      </div>
    </div>);
  }
}

export default Busy;
