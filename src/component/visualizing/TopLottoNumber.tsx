import { FC } from 'react';
import { LottoNumberElement } from './LottoNumberElement';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: { position: 'absolute', right: 4, top: 4 },
  root: { minWidth: '47rem' },
}));

interface ITopLottoNumberProps {
  top5Numbers: number[];
}

export const TopLottoNumber: FC<ITopLottoNumberProps> = ({ top5Numbers }) => {
  return (
    <>
      {top5Numbers.map((num) => (
        <LottoNumberElement number={num + 1} />
      ))}
    </>
  );
};
