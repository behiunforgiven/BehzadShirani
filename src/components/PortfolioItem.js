import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div className="work-box">
          <div onClick={this.handleOpen}>
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
