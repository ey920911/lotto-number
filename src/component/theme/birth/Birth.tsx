import React from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import GenRandomNum from '../random/GenRandomNum';

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
  const classes = useStyle();
  const [create, setCreate] = React.useState(false);

  const handleClick = () => {
    setCreate(true);
  };

  const numArr = Array.from({ length: props.line }, () => 1);
  return (
    <div className="main-section">
      <div>생년월일을 입력하세요</div>
      <TextField className={classes.birthField} label="yymmdd" />
      <Button onClick={handleClick}> 생성 </Button>
      <div className={classes.container}>
        {create && numArr.map(() => <GenRandomNum />)}
      </div>
    </div>
  );
}
export default React.memo(Birth);
