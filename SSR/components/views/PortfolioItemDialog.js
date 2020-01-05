import React from "react";
import {inject , observer} from 'mobx-react';
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";


const Transition = React.forwardRef((props, ref) => (
  <Slide ref={ref} duration={800} direction="up" in={false} {...props} />
));

Transition.displayName = "Transition";

const PortfolioItemDialog  = inject("PortfolioStore")(observer(({PortfolioStore}) => {
  
  const item = PortfolioStore.portfolioItem;
  const isDialogOpen = PortfolioStore.isDialogOpen;

  const handleBackdropClick = () => {
    PortfolioStore.closeDialog();
  };

  if (typeof item.images === "undefined") item.images = [];

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
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {" "}
            {item.title}{" "}
          </a>
        </div>
        <img className="card-img-top" src={item.images[0]} />
        <div className="card-body">
          <p>{item.description}</p>
        </div>
      </div>
    </Dialog>
  );
}));

export default PortfolioItemDialog;
