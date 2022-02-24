import React from 'react';
import { makeStyles } from '@material-ui/core';
import GenRandomNum from './GenRandomNum';

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
        <GenRandomNum />
      ))}
    </div>
  );
}

export default RandomNumber;
