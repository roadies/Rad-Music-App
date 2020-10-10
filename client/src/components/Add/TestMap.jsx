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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  // -------------------END INITIAL LOAD---------------------//

  // -------------------State---------------------//
  const [bandName, setName] = useState('');
  const [date, setDate] = useState();
  const [details, setDetails] = useState();
  const [genre, setGenre] = useState();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [submittedLat, setSubmittedLat] = useState(null);
  const [testLat, setLat] = useState(null);
  const [submittedLng, setSubmittedLng] = useState(null);
  const [testLng, setLng] = useState(null);
  const [venue, setVenue] = useState();

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
      />
      <div className="preview for band input" style={{ border: 'solid green 1px', padding: '10px' }}>
        <h1>
          THIS IS THE BAND INFORMATION
        </h1>
        <Form.Group>
          <FormLabel size="sm">Band Name</FormLabel>
          <Form.Text className="text-muted">{bandName}</Form.Text>
          <FormLabel size="sm">Genre</FormLabel>
          <Form.Text className="text-muted">{genre}</Form.Text>
          <FormLabel size="sm">Date</FormLabel>
          <Form.Text className="text-muted">{date}</Form.Text>
          <FormLabel size="sm">Venue</FormLabel>
          <Form.Text className="text-muted">{venue}</Form.Text>
          <FormLabel size="sm">Details</FormLabel>
          <Form.Text className="text-muted">{details}</Form.Text>
        </Form.Group>
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

export default Map;
