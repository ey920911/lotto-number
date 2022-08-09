import { Map, MapMarker } from 'react-kakao-maps-sdk';

function PlaceItemMap({ name = '', x = 37.350078, y = 127.108952 }) {
  return (
    <Map
      center={{ lat: x, lng: y }}
      style={{ width: '90%', height: '30rem', margin: '1rem 5rem' }}
    >
      <MapMarker position={{ lat: x, lng: y }}>
        <div>{name}</div>
      </MapMarker>
    </Map>
  );
}

export default PlaceItemMap;
