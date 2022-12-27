import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormattedMessage } from "react-intl";

export default function AlertDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog
      sx={{marginTop:10}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <FormattedMessage id="app.condiciones" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <FormattedMessage id="app.texto" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
          <FormattedMessage id="app.aceptar" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
