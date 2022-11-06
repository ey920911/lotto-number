import { FC } from 'react';

interface LottoNumberProps {
  number: number;
}

export const LottoNumberElement: FC<LottoNumberProps> = ({ number }) => (
  <button className="lotto-num">{number}</button>
);
