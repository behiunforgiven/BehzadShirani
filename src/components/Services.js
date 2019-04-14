import React, { Component } from "react";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="services" className="services-mf route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                These are the services you can hire me for.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">

          <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="fa fa-code" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Development</h2>
                  <p className="s-description text-justify">
                  Develop new web applications using ASP.NET, web services, and MVC.<br/>
                  In front-end have experience with jQuery, AnglarJs and React.<br/>
                  Design and implement websites with Wordpress.
                  </p>
                </div>
              </div>
            </div>
          <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="fa fa-mobile" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Mobile Development</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
          <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className="fa fa-desktop" />
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Desktop Development</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
