import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import mapStyles from './styles';

const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
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

  if (loadError) {
    return 'ERROR LOADING MAPS';
  }
  if (!isLoaded) {
    return 'LOADING MAPS';
  }
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      />
    </div>
  );
}
