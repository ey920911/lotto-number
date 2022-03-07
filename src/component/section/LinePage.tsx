import React from 'react';
import { useHistory } from 'react-router-dom';
import { Select, MenuItem } from '@material-ui/core';

interface Line {
  line: number;
  handleChange: (event: any) => void;
}
export default function LinePage(props: Line) {
  const [line, setLine] = React.useState(props.line);
  const history = useHistory();

  return (
    <>
      <div>로또 줄 수를 입력하세요.</div>
      <Select value={line} label="number_line" onChange={props.handleChange}>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </>
  );
}
