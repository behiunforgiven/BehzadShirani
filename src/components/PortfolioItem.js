import React, { Component } from "react";


export default class PortfolioItem extends Component {
  

  render() {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-container" onClick={() => this.props.openDialog(this.props)}>
            <div className="work-img">
              <img src={this.props.image} alt="" className="img-fluid" />
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">{this.props.title}</h2>
                  <div className="w-more">
                    <span className="w-ctegory">{this.props.category}</span> /{" "}
                    <span className="w-date">{this.props.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
