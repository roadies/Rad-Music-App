/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import Axios from 'axios';
import mapStyles from '../Add/styles';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '80vh',
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

const Landing = ({ user, genre }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapReference = useRef();
  const onMapLoad = useCallback((map) => {
    mapReference.current = map;
  }, []);

  if (loadError) return 'ERROR LOADING MAPS';
  if (!isLoaded) return 'LOADING MAPS';

  return (
    <div>
      <div style={{ border: 'solid green 1px', padding: '10px' }}>
        <div>
          <h5>
            Welcome to your radically awesome music assistant,
          </h5>
          <h4>
            {' '}
            {user}
            !
          </h4>
        </div>
        <div>
          Please have a look at the map below to see
          <h6>
            {' '}
            {genre}
            {' '}
          </h6>
          shows nearby!
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker
          position={{ lat: 30, lng: -90 }} // positions will change -> lat,lng address
          icon={{
            url: 'https://i.imgur.com/zSMeNvZ.png', // grabs an image from imgur and sets it as marker
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Landing;
