import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PlaceItem from './PlaceDataContainer.jsx';
import { PLACE_DATA } from 'data/PositionData';

const useStyles = makeStyles({
  placeContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
});

function PlaceArea({ name = 'all' }) {
  const classes = useStyles();
  const placeList = Object.entries(PLACE_DATA[name]);

  return (
    <div className={classes.placeContainer}>
      {placeList.map(([name, data]) => (
        <PlaceItem name={name} data={data} />
      ))}
    </div>
  );
}
export default PlaceArea;
