import React from "react";

export default (props) => {
  
    return (
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle">
              <i className={`fa fa-${props.icon}`} />
            </span>
          </div>
          <div className="service-content">
            <h2 className="s-title">{props.title}</h2>
            <p className="s-description text-justify" dangerouslySetInnerHTML={{__html: props.description}}></p>
          </div>
        </div>
      </div>
    );
}
