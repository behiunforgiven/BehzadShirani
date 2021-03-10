import React from "react";
import { inject, observer } from "mobx-react";
import Grow from "@material-ui/core/Grow";

var PortfolioItem = inject("portfolioStore")(
  observer(({ item, timeout,trigger }) => {
    return (
      <Grow in={trigger} timeout={timeout}>
        <div className="col-md-4">
          <div className="work-box">
            <a
              className="work-container"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-img">
                <img src={item.images[0]} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-12">
                    <h2 className="w-title">{item.title}</h2>
                    <div className="w-more">
                      <span className="w-ctegory">{item.category}</span> /{" "}
                      <span className="w-date">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Grow>
    );
  })
);

export default PortfolioItem;
