import React, { useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import PlaceDataContainer from './PlaceDataContainer';
import { PLACE_DATA } from 'data/PositionData';
import { TPlaceArea } from 'types/PlaceAreaType';

interface IProps {
  name: string;
}

const useStyles = makeStyles({
  placeContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
});

function PlaceArea({ name }: IProps) {
  const classes = useStyles();
  const placeData = PLACE_DATA;
  const placeList: [string, object][] = Object.entries(placeData);

  const loader = useRef(null);
  const [visiblePage, setVisiblePage] = useState(1);

  // init visiblePage value
  useEffect(() => {
    setVisiblePage(1);
    console.log('name: ', name);
  }, [name]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setVisiblePage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    console.log('loader.current', loader.current);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  console.log('placeList: ', placeList);

  return (
    <div className={classes.placeContainer}>
      {placeList.map(([name, data], index) =>
        index > visiblePage ? (
          <></>
        ) : (
          <PlaceDataContainer name={name} data={data} />
        )
      )}
      <div ref={loader} />
    </div>
  );
}
export default PlaceArea;
