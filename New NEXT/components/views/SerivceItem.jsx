import React from "react";

const ServiceItem = (props) => {
  
    return (
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle">
              {props.icon}
            </span>
          </div>
          <div className="service-content">
            <h2 className="s-title">{props.title}</h2>
            <p className="s-description" dangerouslySetInnerHTML={{__html: props.description}}></p>
          </div>
        </div>
      </div>
    );
}

export default ServiceItem;