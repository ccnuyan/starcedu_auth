import React, { Component } from 'react';

class WebApps extends Component {

  // componentDidMount = () => {
  //   $('.webapp')
  //     .visibility({
  //       once: true,
  //       // update size when new content loads
  //       observeChanges: true,
  //       // load content on bottom edge visible
  //       onTopVisible() {
  //         // loads a max of 5 times
  //         $('.webapp .card')
  //         .transition({
  //           animation: 'pulse',
  //           interval: 300,
  //         });
  //       },
  //     });
  // }

  render() {
    return (
      <div className="ui stripe vertical webapp segment">
        <div className="ui container">
          <h1 className="ui header">
            Web Apps
          </h1>
          <div className="ui three cards">
            <div className="ui green card">
              <div className="content">
                <div className="header">备课笔记</div>
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
                <a className="ui button" href="/apps/notebook">Go</a>
              </div>
            </div>
            <div className="ui red card">
              <div className="content">
                <div className="header">脑图</div>
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
                <a className="ui button">Go</a>
              </div>
            </div>
            <div className="ui blue card">
              <div className="content">
                <div className="header">网盘空间</div>
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
                <button className="ui button" href="/apps/disk">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default WebApps;
