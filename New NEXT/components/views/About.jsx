import React from "react";
import Chip from '@material-ui/core/Chip';

const About = () => {
  
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
                            src="/static/images/behzad-shirani.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt="Behzad Shirani - بهزاد شیرانی"
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
                            <span>me[at]behzadshirani.ir</span>
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
                      <Chip variant="outlined" color="primary" label="ASP.NET MVC" />
                      <Chip color="primary" label="ASP.NET Core" />
                      <Chip variant="outlined" color="primary" label="SQL Server" />
                      <Chip color="primary" label="Javascript" />
                      <Chip variant="outlined" color="primary" label="Software Development" />
                      <Chip color="primary" label="Android Development" />
                      <Chip variant="outlined" color="primary" label="Kotlin" />
                      <Chip color="primary" label="Flutter" />
                      <Chip variant="outlined" color="primary" label="jQuery" />
                      <Chip color="primary" label="React" />
                      <Chip variant="outlined" color="primary" label="Electron" />
                      <Chip color="primary" label="WPF" />
                      <Chip variant="outlined" color="primary" label="Photoshop" />
                      <Chip color="primary" label="Microsoft Office" />
                      <Chip variant="outlined" color="primary" label="IoT" />
                      <Chip color="primary" label="Arduino" />
                      <Chip variant="outlined" color="primary" label="Wordpress" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                      I graduated of Bachelor of computer software engineering and spent all these years – since 2008 how to be a greate programmer.
                      {"I started as a .Net web developer with ASP.NET web forms then ASP.NET MVC. According to my passion for web development, I tried to learn front-end libraries and frameworks such as JavaScript, jQuery, AngularJs and recently i'm trying to do some projects with ReactJs."}
                      </p>
                      <p className="lead">
                        {"I've done some Mobile Application projects with Android Native (Java and Kotlin) and React Native."}
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

  export default About;



