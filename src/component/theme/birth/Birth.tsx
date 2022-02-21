import React, { useState } from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { BrowserRouter, useHistory } from 'react-router-dom';
import EachRandomNumber from '../random/GenRandomNum';

const useStyle = makeStyles({
  birthField: {
    width: '4rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

interface Line {
  line: number;
}

function Birth(props: Line) {
  const history = useHistory();
  const classes = useStyle();
  const [create, setCreate] = React.useState(false);

  const handleClick = (event: any) => {
    setCreate(true);
  };

  const numArr = Array.from({ length: props.line }, () => 1);
  return (
    <div className="main-section">
      <div>생년월일을 입력하세요</div>
      <TextField className={classes.birthField} label="yymmdd" />
      <Button onClick={handleClick}> 생성 </Button>
      <div className={classes.container}>
        {create && numArr.map(() => <EachRandomNumber />)}
      </div>
    </div>
  );
}
export default React.memo(Birth);
