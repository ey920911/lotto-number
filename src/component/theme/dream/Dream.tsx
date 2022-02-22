import React from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchList from './SearchList';
import { debounce } from 'lodash';
interface Line {
  line: number;
}

const DREAM_WORDS = [
  '흰머리',
  '갓난아기',
  '황재',
  '임금',
  '할아버지',
  '할머니',
  '첫기차',
  '깡패',
  '진주',
  '해물',
  '해산물',
  'test',
  '임금',
  '할아버지',
  '할머니',
  '첫기차',
];

function Dream(props: Line) {
  const history = useHistory();
  const [filter, setFilter] = React.useState(['']);

  const handleClick = (event: any) => {
    // setCreate(true);
  };

  // debounce 적용으로 0.5초마다 textFieldChange 인식하도록 함
  const textFieldChange = debounce((event: any) => {
    const input = event.target.value;
    console.log('event input', event.target.value);
    const filter = DREAM_WORDS.filter((item) => item.startsWith(input));
    console.log('filter', filter);
    setFilter(filter);
  }, 500);

  return (
    <>
      <div className="main-section"> 꿈에 나온 단어를 입력하세요 </div>
      <TextField label="단어 입력" onChange={textFieldChange} />
      <SearchList filteredData={filter} />
    </>
  );
}
export default Dream;
