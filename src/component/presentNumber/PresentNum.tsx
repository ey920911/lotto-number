import { Button, makeStyles } from '@material-ui/core';
import { useStore } from 'custom_util';

interface IProps {
  num: number[];
}

const useStyles = makeStyles({
  container: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
});

function PresentNum({ num }: IProps) {
  const { statisticsStore } = useStore();
  const classes = useStyles();
  const date = new Date();
  const genDateStr = date.toLocaleString('ko-kr');

  statisticsStore.setLottoData(num, genDateStr);

  return (
    <div className={classes.container}>
      {num.map((item) => (
        <Button key={item} variant="contained">
          {item}
        </Button>
      ))}
    </div>
  );
}

export default PresentNum;
