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
  const test = [];
  const [favoriteGenre, setFavoriteGenre] = useState([]);
  const [selected, setSelected] = useState(null);

  const getGenres = () => {
    const params = { genre };
    Axios.get('/api/shows/genre', { params })
      .then(({ data }) => {
        console.log(data);
        data.forEach((entry) => {
          console.log(entry.genre);
          test.push({ lat: Number(entry.lat), lng: Number(entry.lng), genre: entry.genre });
        });
        setFavoriteGenre(test);
      });
  };

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
        <div>
          <button onClick={() => getGenres()}>
            Search for shows
          </button>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {favoriteGenre.map((marker, id) => (
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
                TEST
              </h2>
              <p>
                TEST
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Landing;
