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
import InputForm from './BandForm';

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

const Map = () => {
  // -------------------Initial Load---------------------//
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDHphKFwqqmNW6rkUr2svI3Jb90KRCuV-I',
    libraries,
  });
  // -------------------END INITIAL LOAD---------------------//

  // -------------------State---------------------//
  const [markers, setMarkers] = useState([]);
  const [selectMarker, setSelectedMarker] = useState(null);
  const [markerTitle, setTitle] = useState('');
  const [showDate, setDate] = useState('');
  const [testLat, setLat] = useState();
  const [testLng, setLng] = useState();
  const [testLats, setLats] = useState();
  const [testLngs, setLngs] = useState();
  // -------------------END STATE---------------------//

  // -------------------Helpers---------------------//

  const mapReference = useRef();
  const onMapLoad = useCallback((map) => {
    mapReference.current = map;
  }, []);

  // -------------------END HELPERS---------------------//

  // -------------------LOAD CHECKER---------------------//
  if (loadError) return 'ERROR LOADING MAPS';
  if (!isLoaded) return 'LOADING MAPS';
  // -------------------END LOAD CHECKER---------------------//

  // -------------------RENDER AREA---------------------//
  return (
    <div>
      {/* INSERT INFO FORM HERE  */}
      <InputForm testLat={testLat} testLng={testLng} setLats={setLats} setLngs={setLngs} setLat={setLat} setLng={setLng} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker
        // this will eventually become the date entered in
          position={{ lat: testLats, lng: testLngs }} // positions will change -> lat,lng address
          icon={{
            url: 'https://i.imgur.com/zSMeNvZ.png',
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20),
          }}
        />
        {/* toggles select marker info */}
        {selectMarker ? (
          <InfoWindow position={{ lat: selectMarker.lat, lng: selectMarker.lng }} onCloseClick={() => { setSelectedMarker(null); }}>
            <div>
              <h1>
                {markerTitle}
              </h1>
              <p>
                Time of Show:
                {formatRelative(selectMarker.time, new Date())}
              </p>
            </div>
          </InfoWindow>
        ) : null }
      </GoogleMap>
    </div>
  );
};

export default Map;
