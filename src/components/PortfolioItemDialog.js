import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide duration={800} direction="up" in={false} {...props} />;
}

export default class PortfolioItemDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    };
  }

  componentWillUpdate() {
    this.setState({open : this.props.open});
  }

  handleBackdropClick = () => {
    this.setState({ open: false });
    this.props.close();
  };

  render() {
    
    let {item} = this.props;

    return (
      <Dialog
        onBackdropClick={this.handleBackdropClick}
        fullWidth={true}
        maxWidth="md"
        TransitionComponent={Transition}
        open={this.state.open}
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
}
