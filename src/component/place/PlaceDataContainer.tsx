import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import PlaceItemMap from './PlaceItemMap';
import { PLACE_DATA } from 'data/PositionData';

interface IProps {
  name: string;
  data: any;
  // [TODO] PlacArea 에서 type 정의해서 넘겨주기!
  // { location: string; prizeNum: number; position: number[] };
}
const useStyles = makeStyles({
  placeName: { fontSize: '1.5rem', marginTop: '1rem' },
  placePosition: { fontSize: '1rem' },
  placePrizNum: {},
  placeItem: { display: 'flex', flexDirection: 'column' },
});

function PlaceDataContainer({ name, data }: IProps) {
  const classes = useStyles();
  const dataArr = Object.keys(data);

  return (
    <>
      {dataArr.map((ele) => {
        console.log('ele', ele);
        return (
          <>
            <div className={classes.placeItem}>
              <div className={classes.placeName}> {ele}</div>
              <p className={classes.placePosition}>
                주소: {data[ele].location} 당첨 횟수: {data[ele].prizeNum}
              </p>
            </div>
            <PlaceItemMap
              name={ele}
              x={data[ele].position[0]}
              y={data[ele].position[1]}
            />
          </>
        );
      })}

      {/* <PlaceItemMap name={name} x={data.position[0]} y={data.position[1]} /> */}
    </>
  );
}
export default PlaceDataContainer;
