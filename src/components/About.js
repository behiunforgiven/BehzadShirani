import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src={require('../images/behzad-shirani.jpg')}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Behzad Shirani</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Software Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>shirani.developer[at]gmail</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>+98-913-266-6946</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      <span>ASP.NET</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <span>Android</span> <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <span>C#</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                      I graduated of Bachelor of computer software engineering and spent last 10 years – since 2008 how to be a greate programmer.
                      I started as a .Net web developer with ASP.NET web forms then ASP.NET MVC. According to my passion for web development, I tried to learn front-end libraries and frameworks such as JavaScript, jQuery, AngularJs and recently i'm trying to do some projects with ReactJs.
                      </p>
                      <p className="lead">
                      I've done some Mobile Application projects with Android Native (Java and Kotlin) and React Native.
                      </p>
                      <p className="lead">
                      Highly motivated to learning and share all I know to the others.
                      As a team member, I communicate EFFECTIVELY with my team mates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
