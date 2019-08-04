import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { useStore} from './State';
import { isMetaProperty } from "@babel/types";

const Transition = React.forwardRef((props, ref) => 
  <Slide ref={ref} duration={800} direction="up" in={false} {...props} />
);

Transition.displayName = "Transition";

const PortfolioItemDialog = () => {

  const [{ isDialogOpen , item }, dispatch] = useStore();
  
  const handleBackdropClick = () => {
    dispatch({
      type: 'closeDialog'
    })
  };


  if(typeof item.images === "undefined")
    item.images = [];

      return (
        <Dialog
          onBackdropClick={handleBackdropClick}
          fullWidth={true}
          maxWidth="sm"
          TransitionComponent={Transition}
          open={isDialogOpen}
          disableBackdropClick={false}
          aria-labelledby="max-width-dialog-title"
        >
          <div className="card border-dark">
            <div className="card-header">
              <a href={item.url} target="_blank"> {item.title} </a>
            </div>
            <img className="card-img-top" src={item.images[0]}/>
            <div className="card-body">
            <p>{item.description}</p>
            </div>
          </div>
        </Dialog>
    );
  }

export default PortfolioItemDialog;