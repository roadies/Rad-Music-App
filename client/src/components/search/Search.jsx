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
import Axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';
import { formatRelative } from 'date-fns';
import { set } from 'js-cookie';
import SearchTab from './SearchTab';
import { SearchInfo, SearchInfoVenue } from './SearchInfo';
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

const Search = ({ user, genre }) => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapReference = useRef();
  const onMapLoad = useCallback((map) => {
    mapReference.current = map;
  }, []);
  const test = [];

  const getShows = (query, type) => {
    const params = { query, type };
    if (type === 'band') {
      Axios.get('/api/shows/band', { params })
        .then(({ data }) => {
          data.forEach((coords) => {
            test.push({
              lat: Number(coords.lat), lng: Number(coords.lng), bandName: coords.bandName, venue: coords.venue, genre: coords.genreId, details: coords.details, date: coords.date,
            });
          });
          setMarkers(test);
        });
    } else if (type === 'venue') {
      Axios.get('/api/shows/venue', { params })
        .then(({ data }) => {
          data.forEach((coords) => {
            test.push({
              lat: Number(coords.lat), lng: Number(coords.lng), bandName: coords.bandName, venue: coords.venue, genre: coords.genreId, details: coords.details, date: coords.date,
            });
          });
          setMarkers(test);
        });
    } else if (type === 'date') {
      Axios.get('/api/shows/date', { params })
        .then(({ data }) => {
          data.forEach((coords) => {
            test.push({
              lat: Number(coords.lat), lng: Number(coords.lng), bandName: coords.bandName, venue: coords.venue, genre: coords.genreId, details: coords.details, date: coords.date,
            });
          });
          setMarkers(test);
        });
    }
  };
  if (loadError) return 'ERROR LOADING MAPS';
  if (!isLoaded) return 'LOADING MAPS';

  return (
    <div>
      <div style={{ border: 'solid green 1px', padding: '10px' }}>
        {/* add in views here with tabs */}
        <SearchTab getShows={getShows} />
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >

        {markers.map((marker, id) => (
          <Marker
            key={id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: 'https://i.imgur.com/2rlRTfY.png',
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                {/* how to get these thing by themselves */}
                <SearchInfo selected={selected} />
              </h2>
              <p>
                <SearchInfoVenue selected={selected} />
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Search;
