import React from 'react';
import { useHistory } from 'react-router-dom';
import { Select, MenuItem } from '@material-ui/core';

interface Line {
  line: number;
  handleChange: (event: any) => void;
}
const LOTTO_LINE = [1, 5, 10, 20, 30];

export default function LinePage(props: Line) {
  const [line, setLine] = React.useState(props.line);
  const history = useHistory();
  return (
    <>
      <div>로또 줄 수를 입력하세요.</div>
      <Select value={line} label="number_line" onChange={props.handleChange}>
        {LOTTO_LINE.map((num) => (
          <MenuItem value={num}>{num}</MenuItem>
        ))}
      </Select>
    </>
  );
}
