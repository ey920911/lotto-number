import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import PlaceItemMap from './PlaceItemMap';
import { PLACE_DATA } from 'data/PositionData';

// interface IProps {
//   name: String;
// }
const useStyles = makeStyles({
  placeName: { fontSize: '1.5rem', marginTop: '1rem' },
  placePosition: { fontSize: '1rem' },
  placePrizNum: {},
  placeItem: { display: 'flex', flexDirection: 'column' },
});

function PlaceDataContainer(props) {
  const { name, data } = props;
  const classes = useStyles();
  // const placeList = Object.entries(PLACE_DATA[name]);

  return (
    <>
      <div className={classes.placeItem}>
        <div className={classes.placeName}> {name}</div>
        <p className={classes.placePosition}>
          주소: {data.location} 당첨 횟수: {data.prizeNum}
        </p>
      </div>
      <PlaceItemMap name={name} x={data.position[0]} y={data.position[1]} />
    </>
  );
}
export default PlaceDataContainer;
