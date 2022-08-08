import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PlaceItem from './PlaceDataContainer.jsx';
import { PLACE_DATA } from 'data/PositionData';

const useStyles = makeStyles({
  placeContainer: { display: 'flex', flexDirection: 'column' },
});

interface IProps {
  name: string;
}

function PlaceArea(props: IProps) {
  const { name } = props;
  const classes = useStyles();
  const placeList = Object.entries(PLACE_DATA['all']);

  return (
    <div className={classes.placeContainer}>
      {placeList.map(([name, data]) => (
        <PlaceItem name={name} data={data} />
      ))}
    </div>
  );
}
export default PlaceArea;
