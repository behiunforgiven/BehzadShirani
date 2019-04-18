import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemDialog from "./PortfolioItemDialog";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = { openDialog: false };
    this.portfos = [
      {
        id: 1,
        image: require("../images/work-1.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      },
      {
        id: 2,
        image: require("../images/work-2.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      },
      {
        id: 3,
        image: require("../images/work-3.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      },
      {
        id: 4,
        image: require("../images/work-4.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      },
      {
        id: 5,
        image: require("../images/work-5.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      },
      {
        id: 6,
        image: require("../images/work-6.jpg"),
        title: "Lorem impsum dolor",
        category: "Web Design",
        date: "18 Sep. 2018"
      }
    ];
    this.afterClosePopup = this._afterClosePopup.bind(this);
  }

  _afterClosePopup = () => {
    this.setState({
      openDialog: false
    });
  };

  handleOpen = (item) => {
    this.setState({ openDialog: true,item:item });
  };

  render() {
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
            {this.portfos.map(portfo => {
              return (
                <PortfolioItem 
                  openDialog={() => this.handleOpen(portfo)} 
                  key={portfo.id} 
                  {...portfo}/>
              );
            })}
          </div>
        </div>
        {this.state.openDialog ? (
          <PortfolioItemDialog 
            open={this.state.openDialog} 
            item={this.state.item}
            close={this.afterClosePopup}
            />
        ) : null}
      </section>
    );
  }
}

export default Portfolio;
