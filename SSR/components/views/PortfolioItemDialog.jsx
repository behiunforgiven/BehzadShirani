import React from "react";
import { useStores } from "../stores/RootStore";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";


const Transition = React.forwardRef((props, ref) => (
  <Slide ref={ref} duration={800} direction="up" in={false} {...props} />
));

Transition.displayName = "Transition";

const PortfolioItemDialog  = () =>{
  
  const { portfolioStore } = useStores();
  const item = portfolioStore.portfolioItem;
  const isDialogOpen = portfolioStore.isDialogOpen;

  const handleBackdropClick = () => {
    portfolioStore.closeDialog();
  };

  
  return (
    item == null ?
    <></> :
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
};

export default PortfolioItemDialog;
