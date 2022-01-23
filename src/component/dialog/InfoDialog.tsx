import { useState, useCallback } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import FormDialog from './FormDialog';

const useStyles = makeStyles(() => ({
  buttomContainer: {
    margin: '0 1.063rem 1.063rem 0 ',
  },
  addButton: {
    height: '2rem',
    width: '4.625rem',
    backgroundColor: '#48b3cf',
    color: '#fff',
    marginLeft: '1rem',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#48b3cf',
    },
  },
}));

interface IProps {
  openInit: boolean;
  handleHelpClose: any;
}

function InfoDialog(props: IProps) {
  const classes = useStyles();

  return (
    <FormDialog
      open={props.openInit}
      dialogTitle="숫자 출력 정보"
      buttons={
        <div className={classes.buttomContainer}>
          {/* <Button
            className="dialog-cancel-button"
            onClick={props.handleHelpClose}
          >
            취소
          </Button> */}
          <Button className="dialog-button" onClick={props.handleHelpClose}>
            확인
          </Button>
        </div>
      }
      handleClose={props.handleHelpClose}
    />
  );
}
export default InfoDialog;
