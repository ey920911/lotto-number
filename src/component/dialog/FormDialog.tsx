import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogActions,
  IconButton,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';

interface IProps {
  open: boolean;
  buttons: any;
  dialogContent?: React.Component;
  onClose?: any;
  handleClose: any;
  dialogTitle: string;
}
const useStyles = makeStyles(() => ({
  button: { position: 'absolute', right: 4, top: 4 },
  root: { minWidth: '47rem' },
}));

export default function FormDialog(props: IProps) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open ?? false}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      maxWidth={false}
    >
      <DialogTitle id="form-dialog-title" disableTypography>
        <Typography variant="h6">{props.dialogTitle}</Typography>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          // disabled={hasProgressBar}
          className={classes.button}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{props.dialogContent}</DialogContent>
      <DialogActions>{props.buttons}</DialogActions>
    </Dialog>
  );
}
