import { FC } from 'react';
import { LottoNumberElement } from './LottoNumberElement';

interface ITopLottoNumberProps {
  top5Numbers: number[];
}

export const TopLottoNumber: FC<ITopLottoNumberProps> = ({ top5Numbers }) => {
  return (
    <div>
      {top5Numbers.map((num) => (
        <LottoNumberElement number={num + 1} />
      ))}
    </div>
  );
};
