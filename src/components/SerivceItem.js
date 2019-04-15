import React, { Component } from "react";

export default class SerivceItem extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle">
              <i className={`fa fa-${this.props.icon}`} />
            </span>
          </div>
          <div className="service-content">
            <h2 className="s-title">{this.props.title}</h2>
            <p className="s-description text-justify" >{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
