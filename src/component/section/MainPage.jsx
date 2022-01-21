import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Button, Select, MenuItem } from '@material-ui/core';
import {
  LottoFooter,
  ThemeSection,
  Dream,
  RandomNumber,
  Birth,
} from 'component';

function MainPage() {
  const [lottoLine, setLottoLine] = React.useState(5);

  const handleChange = (event) => {
    setLottoLine(event.target.value);
  };
  return (
    <div className="main-section">
      <Select value={lottoLine} label="number_line" onChange={handleChange}>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <ThemeSection />
      <Switch>
        <Route path="/random">
          <RandomNumber line={lottoLine} />
        </Route>
        <Route path="/dream">
          <Dream />
        </Route>
        <Route path="/birth">
          <Birth />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </div>
  );
}

export default MainPage;
