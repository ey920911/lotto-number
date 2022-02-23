import React from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchList from './SearchList';
import { debounce } from 'lodash';
import { DREAM_WORDS } from './dreamData';
interface Line {
  line: number;
}

function Dream(props: Line) {
  const history = useHistory();
  const [filter, setFilter] = React.useState(['']);

  const handleClick = (event: any) => {
    // setCreate(true);
  };

  // debounce 적용으로 0.5초마다 textFieldChange 인식하도록 함
  const textFieldChange = debounce((event: any) => {
    const input = event.target.value;
    const words = Object.values(DREAM_WORDS);
    const filter = words.map((wordsArr) =>
      wordsArr.filter((item) => item.startsWith(input))
    );
    setFilter(filter.flat(2));
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
