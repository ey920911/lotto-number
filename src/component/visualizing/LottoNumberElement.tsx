import { FC } from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    fontSize: '3rem',
    color: 'white',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderRadius: '10rem',
    width: '8rem',
    height: '8rem',
    margin: '1rem',
  },
}));

interface LottoNumberProps {
  number: number;
}

export const LottoNumberElement: FC<LottoNumberProps> = ({ number }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="contained">
      {number}
    </Button>
  );
};
