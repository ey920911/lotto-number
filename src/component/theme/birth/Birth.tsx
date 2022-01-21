import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import { BrowserRouter, useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  birthField: {
    width: '4rem',
  },
});

function Birth() {
  const history = useHistory();
  const classes = useStyle();
  return (
    <div className="main-section">
      <div>생년월일을 입력하세요</div>
      <TextField className={classes.birthField} label="yymmdd" />
    </div>
  );
}
export default Birth;
