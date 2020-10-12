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
import { FormLabel, Form } from 'react-bootstrap';
import Axios from 'axios';
import mapStyles from './styles';
import InputForm from './BandForm';

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

const addShow = (data) => {
  const {
    bandName, date, details, genre, venue, lat, lng,
  } = data;
  Axios.post('/api/shows/', {
    bandName,
    date,
    details,
    genre,
    venue,
    lat,
    lng,
  });
};

// -------------------Initial Load--------------------- //
const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  // -------------------END INITIAL LOAD---------------------//

  // -------------------State---------------------//
  const [bandName, setName] = useState('');
  const [date, setDate] = useState();
  const [details, setDetails] = useState();
  const [genre, setGenre] = useState();
  // const [selectedMarker, setSelectedMarker] = useState(null);
  const [submittedLat, setSubmittedLat] = useState(null);
  const [testLat, setLat] = useState(null);
  const [submittedLng, setSubmittedLng] = useState(null);
  const [testLng, setLng] = useState(null);
  const [venue, setVenue] = useState('');
  const [selected, setSelected] = useState(null);

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
      <InputForm
        bandName={bandName}
        date={date}
        details={details}
        genre={genre}
        testLat={testLat}
        testLng={testLng}
        venue={venue}
        setSubmittedLat={setSubmittedLat}
        setSubmittedLng={setSubmittedLng}
        setLat={setLat}
        setLng={setLng}
        setName={setName}
        setDate={setDate}
        setVenue={setVenue}
        setDetails={setDetails}
        setGenre={setGenre}
        addShow={addShow}
      />
      <div
        className="preview for band input"
        style={{
          float: 'right',
          marginRight: '200px',
          padding: '10px',
        }}
      >
        <div style={{
          fontSize: '36pt',
          padding: '10',
        }}
        >
          <p>Submission Preview</p>
        </div>
        <div>

          <Form.Group>
            <FormLabel style={{ marginTop: '10px', fontSize: '24pt' }}>{bandName}</FormLabel>
            <Form.Text className="text-muted">Band Name</Form.Text>
            <FormLabel style={{ marginTop: '10px', fontSize: '24pt' }}>{genre}</FormLabel>
            <Form.Text className="text-muted">Genre</Form.Text>
            <FormLabel style={{ marginTop: '10px', fontSize: '24pt' }}>{date}</FormLabel>
            <Form.Text className="text-muted">Date</Form.Text>
            <FormLabel style={{ marginTop: '10px', fontSize: '24pt' }}>{venue}</FormLabel>
            <Form.Text className="text-muted">Venue</Form.Text>
            <FormLabel style={{ marginTop: '10px', fontSize: '24pt' }}>{details}</FormLabel>
            <Form.Text className="text-muted">Details</Form.Text>
          </Form.Group>
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
          position={{ lat: submittedLat, lng: submittedLng }} // positions will change -> lat,lng address
          icon={{
            url: 'https://i.imgur.com/h7k1p1I.png', // grabs an image from imgur and sets it as marker
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20),
          }}
          onClick={() => {
            setSelected(marker);
          }}

        />
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                test
              </h2>
              <p>
                test
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;
