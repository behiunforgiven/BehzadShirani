import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useStore} from './State';

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

    return (
        <Dialog
          onBackdropClick={handleBackdropClick}
          fullWidth={true}
          maxWidth="md"
          TransitionComponent={Transition}
          open={isDialogOpen}
          disableBackdropClick={false}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">{item.title}</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              
            </DialogContentText>
          </DialogContent>
        </Dialog>
    );
  }

export default PortfolioItemDialog;