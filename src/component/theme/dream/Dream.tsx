import React from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import SearchList from './SearchList';
import { debounce } from 'lodash';
import { DREAM_WORDS } from './dreamData';
import DreamStore from 'store/DreamStore';
import GenRandomNum from '../random/GenRandomNum';

const useStyles = makeStyles({
  wordsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  lottoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  wordItem: {
    display: 'flex',
    backgroundColor: '#EEE8EF',
    margin: '0.2rem',
  },
  deleteButton: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '1rem',
    margin: '0.2rem',
  },
});
interface Line {
  line: number;
}

function Dream(props: Line) {
  const history = useHistory();
  const [filter, setFilter] = React.useState(['']);
  const classes = useStyles();
  const [create, setCreate] = React.useState(false);
  const words = DreamStore.words;
  const numArr = Array.from({ length: props.line }, () => 1);

  const handleClick = (event: any) => {
    setCreate(true);
  };

  const handleDeleteClick = (event: any) => {
    const value = event.target.id;
    DreamStore.deleteItem(value);
  };

  // debounce 적용으로 0.5초마다 textFieldChange 인식하도록 함
  const textFieldChange = debounce((event: any) => {
    setCreate(false);
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
      <button onClick={handleClick}>생성</button>
      <div className={classes.wordsContainer}>
        {words.map((word) => (
          <div className={classes.wordItem}>
            {word}
            <button
              onClick={handleDeleteClick}
              id={word}
              className={classes.deleteButton}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <SearchList filteredData={filter} />
      <div className={classes.lottoContainer}>
        {create && numArr.map(() => <GenRandomNum isDream={true} />)}
      </div>
    </>
  );
}
export default observer(Dream);
