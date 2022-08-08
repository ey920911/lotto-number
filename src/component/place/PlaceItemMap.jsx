import React, { useState, useEffect } from 'react';
const { kakao } = window;
// B22330200
function PlaceItemMap({ x = 37.350078, y = 127.108952 }) {
  useEffect(() => {
    const container = document.getElementById('myMap');

    const options = {
      center: new kakao.maps.LatLng(x, y),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(x, y);

    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
  });

  return (
    <div
      id="myID"
      style={{ width: '80rem', height: '30rem', margin: '1rem 5rem' }}
    ></div>
  );
}

export default PlaceItemMap;
