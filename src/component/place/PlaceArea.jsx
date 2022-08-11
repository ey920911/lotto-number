import React, { useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import PlaceItem from './PlaceDataContainer.jsx';
import { PLACE_DATA } from 'data/PositionData';

const useStyles = makeStyles({
  placeContainer: { display: 'flex', flexDirection: 'column', width: '100%' },
});

function PlaceArea({ name = 'all' }) {
  const classes = useStyles();
  const placeList = Object.entries(PLACE_DATA[name]);
  const loader = useRef(null);
  const [visiblePage, setVisiblePage] = useState(1);

  // init visiblePage value
  useEffect(() => {
    setVisiblePage(1);
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

  return (
    <div className={classes.placeContainer}>
      {placeList.map(([name, data], index) => {
        if (index > visiblePage) return <></>;
        return <PlaceItem name={name} data={data} />;
      })}
      <div ref={loader} />
    </div>
  );
}
export default PlaceArea;
