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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="main-section">
      <ThemeSection />
      <Select value={age} label="number_line" onChange={handleChange}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      <Switch>
        <Route path="/random">
          <RandomNumber line={age} />
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
