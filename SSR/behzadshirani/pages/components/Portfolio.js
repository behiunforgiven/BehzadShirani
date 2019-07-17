import React from "react";
import { StateProvider } from '../State';
import PortfolioItem from "./PortfolioItem";
import PortfolioItemDialog from "./PortfolioItemDialog";


const Portfolio = () => {

  const initialState = {
    isDialogOpen : false,
    item : {}
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'openDialog':
        return {
          ...state,
          isDialogOpen : true,
          item: action.item
        };

        case 'closeDialog':
          return {
            ...state,
            isDialogOpen : false
          };
        
      default:
        return state;
    }
  };

  const portfos = [
    {
      id: 1,
      image: "/static/images/work-1.jpg",
      title: "MSC Sport Automation",
      category: "Web Development",
      date: "April 2013"
    },
    {
      id: 6,
      image: "/static/images/work-6.jpg",
      title: "Azad University Data Analysis",
      category: "Web Development",
      date: "May 2016"
    },
    {
      id: 2,
      image: "/static/images/work-2.jpg",
      title: "Sepehr Sun Sesame Oil",
      category: "Web Development",
      date: "May 2015"
    },
    {
      id: 3,
      image: "/static/images/work-3.jpg",
      title: "Safir Education Institute",
      category: "Web Development",
      date: "December 2018"
    },
    {
      id: 4,
      image: "/static/images/work-4.jpg",
      title: "Behsa Jewelery Gallery",
      category: "Web Development",
      date: "September 2017"
    },
    {
      id: 5,
      image: "/static/images/work-5.jpg",
      title: "Hosco Sport Automation",
      category: "Web Development",
      date: "August 2016"
    }
  ];

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Some of my prior projects
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
                    key={portfo.id} 
                    item={portfo}/>
                );
              })
            }
          </div>
        </div>
        <PortfolioItemDialog />
      </section>
    </StateProvider>
  );
};

export default Portfolio;
