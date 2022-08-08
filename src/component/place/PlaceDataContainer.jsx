import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import PlaceItemMap from './PlaceItemMap';
import { PLACE_DATA } from 'data/PositionData';

// interface IProps {
//   name: String;
// }
const useStyles = makeStyles({
  placeItem: { display: 'flex', flexDirection: 'column' },
});

function PlaceDataContainer(props) {
  const { name, data } = props;
  const classes = useStyles();
  // const placeList = Object.entries(PLACE_DATA[name]);

  return (
    <>
      <p>
        {name} {data.location} 당첨 횟수: {data.prizeNum}
      </p>
      <PlaceItemMap x={data.position[0]} y={data.position[1]} />
    </>
  );
}
export default PlaceDataContainer;
