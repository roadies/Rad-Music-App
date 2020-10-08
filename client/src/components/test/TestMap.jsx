/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import SearchLocation from './SearchLocation';
import mapStyles from './styles';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 30,
  lng: -90,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDiEtAGLNuZ2_Y7NfNr5p3iLSTJzQGkagw',
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selectMarker, setSelectedMarker] = useState(null);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    }]);
    console.log('lat', event.latLng.lat());
    console.log('lng', event.latLng.lng());
  }, []);

  const mapReference = useRef();
  const onMapLoad = useCallback((map) => {
    mapReference.current = map;
  }, []);

  if (loadError) return 'ERROR LOADING MAPS';
  if (!isLoaded) return 'LOADING MAPS';

  return (
    <div>

      <SearchLocation />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: 'https://i.imgur.com/zSMeNvZ.png',
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
            onClick={() => {
              setSelectedMarker(marker);
            }}
          />
        ))}
        {selectMarker ? (
          <InfoWindow position={{ lat: selectMarker.lat, lng: selectMarker.lng }} onCloseClick={() => { setSelectedMarker(null); }}>
            <div>
              <h1>
                Show added
              </h1>
              <p>
                Time of Show:
                {' '}
                {formatRelative(selectMarker.time, new Date())}
              </p>
            </div>
          </InfoWindow>
        ) : null }
      </GoogleMap>
    </div>
  );
}
