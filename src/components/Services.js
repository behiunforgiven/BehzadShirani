import React, { Component } from "react";
import ServiceItem from './SerivceItem';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.services = [
      {
        id: 1,
        title: "Web Development",
        description: ["Develop new web applications using ASP.NET, web services, and MVC.",<br/>,
        "In front-end have experience with jQuery, AnglarJs and React.",<br/>,
        "Design and implement websites with Wordpress."],
        icon: "code"
      },
      {
        id: 2,
        title: "Mobile Development",
        description: ["Develop new web applications using ASP.NET, web services, and MVC.",<br/>,
        "In front-end have experience with jQuery, AnglarJs and React.",<br/>,
        "Design and implement websites with Wordpress."],
        icon: "mobile"
      },
      {
        id: 3,
        title: "Desktop Development",
        description: ["Develop new web applications using ASP.NET, web services, and MVC.",<br/>,
        "In front-end have experience with jQuery, AnglarJs and React.",<br/>,
        "Design and implement websites with Wordpress."],
        icon: "desktop"
      }
    ];
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

          {this.services.map(service => {
            return (
              <ServiceItem key={service.id} {...service}/>
            );
          })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
