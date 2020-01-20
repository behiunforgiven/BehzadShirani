import React from "react";
import { Code, PhoneAndroid , DesktopWindows } from '@material-ui/icons';
import ServiceItem from './SerivceItem';

export default () => {
 
  const services = [
      {
        id: 1,
        title: "Web Development",
        description: "Develop new web applications using ASP.NET, web services, and MVC.<br/>"+
        "In front-end have experience with jQuery, AnglarJs and React.<br/>"+
        "Design and implement websites with Wordpress.",
        icon: <Code style={{fontSize: '5rem'}}/>
      },
      {
        id: 2,
        title: "Mobile Development",
        description: "A forward-thinking developer offering more than three years of experience building, integrating, and supporting Android applications for mobile and tablet devices on the Android platform seeks position with a top technology firm.",
        icon: <PhoneAndroid style={{fontSize: '4rem'}}/>
      },
      {
        id: 3,
        title: "Desktop Development",
        description: "Develop legacy and modern desktop applications. In Microsoft stach have experience with Windows Forms and WPF, also have good experience building modern cross platform desktop applications with Electron.",
        icon: <DesktopWindows style={{fontSize: '4rem'}}/>
      }
    ];
   
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
          {services.map(service => {
            return (
              <ServiceItem key={service.id} {...service}/>
            );
          })}
          </div>
        </div>
      </section>
    );
  
}


