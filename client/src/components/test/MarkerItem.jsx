// render marker
import React, { useState } from 'react';
import {
  InfoWindow,
  Marker,
} from 'react-google-maps';
import Geocode from 'react-geocode';

const MapMarkerItem = ({ feature }) => (

  <Marker
    draggable
    // onDragEnd={onMarkerDragEnd}
    position={{ lat: feature.geometry.coordinates[0], lng: feature.geometry.coordinates[1] }}
  >
    <InfoWindow>
      <div>
        Testing Window
      </div>
    </InfoWindow>
  </Marker>

);

export default MapMarkerItem;