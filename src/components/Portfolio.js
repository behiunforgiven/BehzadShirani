import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemDialog from "./PortfolioItemDialog";

export default () => {

  const [openDialog , setOpenDialog] = useState(false);
  const [item, setItem] = useState({});

  const portfos = [
    {
      id: 1,
      image: require("../images/work-1.jpg"),
      title: "MSC Sport Automation",
      category: "Web Development",
      date: "April 2013"
    },
    {
      id: 6,
      image: require("../images/work-6.jpg"),
      title: "Azad University Data Analysis",
      category: "Web Development",
      date: "May 2016"
    },
    {
      id: 2,
      image: require("../images/work-2.jpg"),
      title: "Sepehr Sun Sesame Oil",
      category: "Web Development",
      date: "May 2015"
    },
    {
      id: 3,
      image: require("../images/work-3.jpg"),
      title: "Safir Education Institute",
      category: "Web Development",
      date: "December 2018"
    },
    {
      id: 4,
      image: require("../images/work-4.jpg"),
      title: "Behsa Jewelery Gallery",
      category: "Web Development",
      date: "September 2017"
    },
    {
      id: 5,
      image: require("../images/work-5.jpg"),
      title: "Hosco Sport Automation",
      category: "Web Development",
      date: "August 2016"
    }
  ];

  const afterClosePopup = () => {
    setOpenDialog(false);
  };

  const handleOpen = (item) => {
    setItem(item);
    setOpenDialog(true);
  };

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </div>
        </div>
        <div className="row">
          {
            portfos.map(portfo => {
            return (
              <PortfolioItem 
                openDialog={() => handleOpen(portfo)} 
                key={portfo.id} 
                {...portfo}/>
            );
          })}
        </div>
      </div>
      {openDialog ? (
        <PortfolioItemDialog 
          open={openDialog} 
          item={item}
          close={afterClosePopup}
          />
      ) : null}
    </section>
  );
};
