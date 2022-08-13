import { Button, makeStyles } from '@material-ui/core';
import { useStore } from 'custom_util';

interface IProps {
  num: number[];
}

const useStyles = makeStyles({
  container: {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  normalButton: {
    margin: '0 0.2rem',
    color: 'white',
    backgroundColor: '#163f92',
    '&.MuiButton-root': {
      minWidth: '3rem',
    },
  },
  // bonusButton: {
  //   margin: '0 0.2rem 0 1rem',
  //   color: 'white',
  //   backgroundColor: '#daa520',
  // },
});

function PresentNum({ num }: IProps) {
  const { statisticsStore } = useStore();
  const classes = useStyles();
  const date = new Date();
  const genDateStr = date.toLocaleString('ko-kr');
  statisticsStore.setLottoData(num, genDateStr);

  return (
    <div className={classes.container}>
      {num.map((item, idx) => (
        <Button key={item} variant="contained" className={classes.normalButton}>
          {item}
        </Button>
      ))}
    </div>
  );
}

export default PresentNum;
