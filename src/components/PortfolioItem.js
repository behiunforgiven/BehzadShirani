import React from "react";

export default (props) => {
    return (
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-container" onClick={() => props.openDialog(props)}>
            <div className="work-img">
              <img src={props.image} alt="" className="img-fluid" />
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="w-title">{props.title}</h2>
                  <div className="w-more">
                    <span className="w-ctegory">{props.category}</span> /{" "}
                    <span className="w-date">{props.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
