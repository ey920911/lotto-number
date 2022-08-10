import { useStore } from 'custom_util';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { TextField, Input } from '@material-ui/core';

const SCORE = { 2: '5등', 3: '4등', 4: '3등', 5: '2등', 6: '1등' };

function StatisticsPage() {
  const { statisticsStore } = useStore();
  const { isServerMode, winStatistics } = statisticsStore;
  const [lottoNum, setLottoNum] = useState('');

  useEffect(() => {
    statisticsStore.initWinStatistics();
  }, []);

  const reg = /^([0-9]{1,2} ){5}\d{1,2}$/;
  const handleChange = (event) => {
    const { value } = event.target;
    const match = reg.test(value);

    if (match)
      statisticsStore.setWinStatistics(
        value.split(' ').map((ele) => parseInt(ele))
      );
    setLottoNum(value);
  };

  return (
    <>
      <p> {isServerMode ? 'server mode' : 'browser mode'}</p>

      <TextField
        id="realLottoNumber"
        label="lotto number"
        onChange={handleChange}
        value={lottoNum}
        inputProps={{
          inputMode: 'numeric',
          pattern: '[1-9]{1}',
          placeholder: '12 2 11 3 6 2',
        }}
      />
      <div>
        {winStatistics.map(
          ([num1, num2, num3, num4, num5, num6, date, matchScore]) => (
            <p>
              {SCORE[matchScore]} 당첨! 번호: {num1} {num2} {num3} {num4}
              {num5} {num6} 번호 발급시간: {date}{' '}
            </p>
          )
        )}
      </div>
    </>
  );
}
export default observer(StatisticsPage);
