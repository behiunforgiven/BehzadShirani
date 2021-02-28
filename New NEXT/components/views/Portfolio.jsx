import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemDialog from "./PortfolioItemDialog";

const Portfolio = () => {
  
  const portfos = [
    {
      id: 1,
      images: ["/static/images/work-1.jpg"],
      title: "MSC Sport Automation",
      category: "Web Development",
      date: "April 2013",
      description:
        "MSC Sport Automation Web Application produced with ASP.NET Web Forms and ASP.NET MVC and jQuery. This web application has almost 70000 users.",
      url: "http://sport.msc.ir"
    },
    {
      id: 6,
      images: ["/static/images/work-6.jpg"],
      title: "Azad University Data Analysis",
      category: "Web Development",
      date: "May 2016",
      url: "http://payesh.khuisf.ac.ir"
    },
    {
      id: 2,
      images: ["/static/images/work-2.jpg"],
      title: "Sepehr Sun Sesame Oil",
      category: "Web Development",
      date: "May 2015",
      url: "http://ssso.ir"
    },
    {
      id: 3,
      images: ["/static/images/work-3.jpg"],
      title: "Safir Education Institute",
      category: "Web Development",
      date: "December 2018",
      url: "http://safiredu.com"
    },
    {
      id: 4,
      images: ["/static/images/work-4.jpg"],
      title: "Behsa Jewelery Gallery",
      category: "Web Development",
      date: "September 2017",
      url: "http://BehsaGallery.ir"
    },
    {
      id: 5,
      images: ["/static/images/work-5.jpg"],
      title: "Hosco Sport Automation",
      category: "Web Development",
      date: "August 2016",
      url: "https://sport.hosco.ir"
    }
  ];

  return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Some of my prior projects</p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            {portfos.map((portfo, index) => {
              return (
                <PortfolioItem
                  key={portfo.id}
                  item={portfo}
                  timeout={500 * index}
                />
              );
            })}
          </div>
        </div>
        <PortfolioItemDialog />
      </section>
  );
};

export default Portfolio;
