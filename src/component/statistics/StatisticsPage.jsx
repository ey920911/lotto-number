import { useStore } from 'custom_util';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { TextField, Input } from '@material-ui/core';

function StatisticsPage() {
  const { statisticsStore } = useStore();
  const { isServerMode, winStatistics, percentStatistics } = statisticsStore;
  const [lottoNum, setLottoNum] = useState('');
  const [result, setResult] = useState({ matchScore: [], percent: 0 });

  useEffect(() => {
    statisticsStore.initWinStatistics();
  }, []);

  const reg = /^([0-9]{1,2} ){6}\d{1,2}$/;
  const handleChange = (event) => {
    const { value } = event.target;
    const match = reg.test(value);

    if (match) {
      const valueToIntArray = value.split(' ').map((ele) => parseInt(ele));
      const matchScore = statisticsStore.calcWinStatistics(valueToIntArray);
      const percent = statisticsStore.calcPercentStatistics(valueToIntArray);
      setResult({ matchScore: matchScore, percent });
    }

    setLottoNum(value);
  };

  return (
    <>
      <p> {isServerMode ? 'Server mode' : 'Browser mode'}</p>
      <p> 토요일 실제 로또 번호를 입력해 보세요.</p>
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
      <p>로또 자동 생성기 정확도 : {result.percent}% </p>
      <div>
        {result.matchScore.map(([score, date, ...num]) => (
          <p>
            {score}등! 번호: {num.map((item) => item + ' ')}
            발급시간: {date}
          </p>
        ))}
      </div>
    </>
  );
}
export default observer(StatisticsPage);
