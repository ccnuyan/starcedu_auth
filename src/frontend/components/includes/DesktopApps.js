import React, { Component } from 'react';

class DesktopApps extends Component {

  // componentDidMount = () => {
  //   $('.desktopapp')
  //   .visibility({
  //     once: true,
  //     // update size when new content loads
  //     observeChanges: true,
  //     // load content on bottom edge visible
  //     onTopVisible() {
  //       // loads a max of 5 times
  //       $('.desktopapp .card')
  //       .transition({
  //         animation: 'pulse',
  //         interval: 300,
  //       });
  //     },
  //   });
  // }


  render() {
    return (
      <div className="ui stripe vertical desktopapp segment">
        <div className="ui container">
          <h1 className="header">
            桌面 Apps
          </h1>
          <div className="ui two cards">
            <div className="ui pink card">
              <div className="content">
                <div className="header">教师端</div>
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
                <button className="ui button">Download</button>
              </div>
            </div>
            <div className="ui teal card">
              <div className="content">
                <div className="header">学生端</div>
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
                <button className="ui button">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopApps;
