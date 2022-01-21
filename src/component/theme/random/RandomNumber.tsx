import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PresentNum } from 'component';
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
interface Line {
  line: number;
}
function RandomNumber(props: Line) {
  const classes = useStyles();
  const numArr = Array.from({ length: props.line }, () => 1);

  return (
    <div className={classes.container}>
      {numArr.map(() => (
        <EachRandomNumber />
      ))}
    </div>
  );
}
function EachRandomNumber(): JSX.Element {
  const data = new Array();
  for (let i = 0; i < 6; i++) {
    const genNum = generateNum();
    data.push(genNum);
    for (let j = 0; j < i; j++) {
      if (data[j] === genNum) {
        data.pop();
        i--;
      }
    }
  }
  return <PresentNum num={data} />;
}
const generateNum = () => Math.floor(Math.random() * 44 + 1);

export default React.memo(RandomNumber);
