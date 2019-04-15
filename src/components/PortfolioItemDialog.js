import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class PortfolioItemDialog extends Component {
  render() {
    return (
        <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          
        </DialogContent>
        
      </Dialog>
    )
  }
}
