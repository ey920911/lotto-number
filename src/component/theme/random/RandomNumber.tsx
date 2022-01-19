import { Button, makeStyles } from '@material-ui/core';
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

  return (
    <div className={classes.container}>
      <EachRandomNumber />
    </div>
  );
}

function EachRandomNumber() {
  const initData: number[] = [1, 1, 1, 1, 1, 1];
  //   console.log(line);
  const data = initData.map((num) => generateNum());
  return <PresentNum num={data} />;
}

function generateNum() {
  return Math.floor(Math.random() * 44 + 1);
}
export default RandomNumber;
