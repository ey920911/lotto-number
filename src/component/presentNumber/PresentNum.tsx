import { Button, makeStyles } from '@material-ui/core';

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
  const classes = useStyles();

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
