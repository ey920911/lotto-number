import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import {
  ThemeSection,
  Dream,
  RandomNumber,
  Birth,
  LinePage,
  IntroPage,
  PlaceMainPage,
  StaticticsPage,
} from 'component';
import { useInput } from 'hooks';
import { VisualizingPage } from '../visualizing/VisualizingPage';

const INIT_VALUE = 1;
const REGEX_NUMBER = /^[0-9]+$/;

function MainPage() {
  const history = useHistory();
  const useInputProps = {
    initValue: INIT_VALUE,
    validator: (value: string) => REGEX_NUMBER.test(value),
    handleEvent: () => history.push('/theme'),
  };
  const { value, onChange } = useInput(useInputProps);

  return (
    <div className="main-section">
      <IntroPage />
      <Switch>
        <Route exact path="/lotto_number">
          <LinePage line={value} handleChange={onChange} />
        </Route>
        <Route exact path="/theme">
          <ThemeSection />
        </Route>
        <Route path="/place">
          <PlaceMainPage />
        </Route>
        <Route exact path="/statistics">
          <StaticticsPage />
        </Route>
        <Route exact path="/visualizing">
          <VisualizingPage />
        </Route>
        <Route path="/theme/random">
          <RandomNumber line={value} />
        </Route>
        <Route path="/theme/dream">
          <Dream line={value} />
        </Route>
        <Route path="/theme/birth">
          <Birth line={value} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
