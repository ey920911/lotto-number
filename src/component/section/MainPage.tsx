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
} from 'component';

function MainPage() {
  const [lottoLine, setLottoLine] = React.useState(1);
  const history = useHistory();

  const handleChange = (event: any) => {
    const value = event.target.dataset.value;
    console.dir(event.target);
    setLottoLine(value);
    history.push('/theme');
  };

  return (
    <div className="main-section">
      <IntroPage />
      <Switch>
        <Route exact path="/lotto_number">
          <LinePage line={lottoLine} handleChange={handleChange} />
        </Route>
        <Route path="/place">
          <PlaceMainPage />
        </Route>
        <Route exact path="/theme">
          <ThemeSection />
        </Route>
        <Route path="/theme/random">
          <RandomNumber line={lottoLine} />
        </Route>
        <Route path="/theme/dream">
          <Dream line={lottoLine} />
        </Route>
        <Route path="/theme/birth">
          <Birth line={lottoLine} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;
