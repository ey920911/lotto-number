import React, { MouseEvent } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function ThemeSection() {
  const history = useHistory();

  const handleClick = (event: MouseEvent) => {
    const path = event.currentTarget.id;
    history.push(`/${path}`);
  };
  return (
    <div className="main-section">
      <Button id="random" onClick={handleClick}>
        랜덤
      </Button>
      <Button id="dream" onClick={handleClick}>
        꿈으로
      </Button>
      <Button id="birth" onClick={handleClick}>
        사주로
      </Button>
    </div>
  );
}
export default ThemeSection;
