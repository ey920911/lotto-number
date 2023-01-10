import { FC } from 'react';
import { LottoNumberElement } from './LottoNumberElement';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: { fontSize: '1rem', margin: '1rem' },
}));

interface ITopLottoNumberProps {
  top5Numbers: number[];
}

export const TopLottoNumber: FC<ITopLottoNumberProps> = ({ top5Numbers }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>TOP 5 Lotto Number</div>
      {top5Numbers.map((num) => (
        <LottoNumberElement number={num + 1} />
      ))}
    </>
  );
};
