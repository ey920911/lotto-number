import React, { MouseEvent, useState } from 'react';
import { Route, Switch } from 'react-router';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InfoDialog from 'component/dialog/InfoDialog';

const theme = [
  { id: 'random', label: '랜덤' },
  { id: 'dream', label: '꿈으로' },
  { id: 'birth', label: '사주로' },
];
interface IProps {
  id: string;
  label: string;
}
function ThemeSection() {
  const [open, setOpen] = useState(false);
  const handleHelpOpen = () => {
    setOpen(true);
  };
  const handleHelpClose = () => {
    setOpen(false);
  };
  return (
    <div className="main-section">
      {theme.map((item) => (
        <ThemeButton id={item.id} label={item.label} />
      ))}
      <Button onClick={handleHelpOpen}>
        <ContactSupportIcon />
      </Button>
      <InfoDialog openInit={open} handleHelpClose={handleHelpClose} />
    </div>
  );
}

const ThemeButton = (props: IProps) => {
  const history = useHistory();
  const handleClick = (event: MouseEvent) => {
    const path = event.currentTarget.id;
    history.push(`/theme/${path}`);
  };

  return (
    <>
      <Button id={props.id} onClick={handleClick}>
        {props.label}
      </Button>
    </>
  );
};
export default ThemeSection;
