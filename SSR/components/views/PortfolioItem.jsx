import React from "react";
import { useStores } from "../stores/RootStore";
import Grow from "@material-ui/core/Grow";

const PortfolioItem = ( {item, timeout }) => {

  const { portfolioStore } = useStores();

    return (
      <Grow in={true} timeout={timeout}>
        <div className="col-md-4">
          <div className="work-box">
            <div
              className="work-container"
              onClick={() => portfolioStore.openDialog(item)}
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
            </div>
          </div>
        </div>
      </Grow>
    );
  }

export default PortfolioItem;
