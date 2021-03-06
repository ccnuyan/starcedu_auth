import React, { Component } from 'react';

class Others extends Component {
  render() {
    return (
      <div className="ui info-panel basic segment">
        <div className="ui container">
          <h1 className="header">
            其他 Apps
          </h1>
          <div className="ui three cards">
            <div className="ui red card">
              <div className="content">
                <div className="header">学习经历分析系统</div>
              </div>
              <div className="content">
                <h4 className="ui sub header">Activity</h4>
                <div className="ui small feed">
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                  </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a>Helen Troy</a> added two pictures
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="extra content">
                <button className="ui button">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Others;
