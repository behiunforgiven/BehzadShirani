import React from "react";
import { useStore} from '../State';

const PortfolioItem = ({item}) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStore();

    return (
      <div className="col-md-4">
        <div className="work-box">
          <div className="work-container" onClick={() => dispatch({
                      type: 'openDialog',
                      item: item
                    })}>
            <div className="work-img">
              <img src={item.image} alt="" className="img-fluid" />
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
    );
  }

  export default PortfolioItem;