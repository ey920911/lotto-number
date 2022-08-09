import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Tabs, Tab, keyframes } from '@mui/material';
import { PLACE } from 'data/constants/Constants';
import PlaceArea from './PlaceArea';
import { useEffect } from 'react';

const useStyles = makeStyles({
  tabContainer: { display: 'flex' },
  tabStyle: {
    '&.MuiTabs-root': {
      minWidth: '1rem',
      marginTop: '3rem',
      '&.Mui-selected': { backgroundColor: 'white', color: 'black' },
    },
    '& .MuiTabs-indicator': { backgroundColor: 'white' },
  },
});

function PlaceTab() {
  const classes = useStyles();
  const history = useHistory();
  const [tabId, setTabId] = useState(0);
  const palceArray = Object.entries(PLACE);

  useEffect(() => {
    history.push('/place/all');
  }, []);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    const idx = parseInt(value);
    const areaPath = `/place/${palceArray[idx][0]}`;
    setTabId(idx);
    history.push(areaPath);
  };

  return (
    <>
      <p>지역 별 로또 명당 TOP 5</p>
      <div className={classes.tabContainer}>
        <Tabs
          id="hot-palce-area"
          orientation="vertical"
          value={tabId}
          onChange={handleChange}
          className={classes.tabStyle}
        >
          {palceArray.map(([key, value]) => (
            <Tab key={key} label={value} />
          ))}
        </Tabs>

        <Switch>
          {palceArray.map(([key, value]) => {
            const url = `/place/${key}`;
            return (
              <Route exact path={url}>
                <PlaceArea name={key} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </>
  );
}
export default PlaceTab;
