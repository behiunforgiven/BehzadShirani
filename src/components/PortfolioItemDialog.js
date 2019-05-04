import React,{ useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide duration={800} direction="up" in={false} {...props} />;
}

export default (props) => {

  const {item} = props;
  const [open, setOpen] = useState(props.open);
  
  useEffect(() => {
    setOpen(props.open);
  });
  
  const handleBackdropClick = () => {
    setOpen(false);
    props.close();
  };

    return (
      <Dialog
        onBackdropClick={handleBackdropClick}
        fullWidth={true}
        maxWidth="md"
        TransitionComponent={Transition}
        open={open}
        disableBackdropClick={false}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{item.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

