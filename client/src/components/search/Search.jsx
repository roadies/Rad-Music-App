<<<<<<< HEAD
import React, { useState } from 'react';
import Axios from 'axios';
import {
  Col, Container, Form, Row, Button,
} from 'react-bootstrap';

const Search = () => {
  const [band, setBand] = useState('Nickelback');
  const [date, setDate] = useState('2020-10-10');
  const [venue, setVenue] = useState('The Willow, Willow Street, New Orleans, LA, USA ');
  const [genre, setGenre] = useState('Alternative');

  const getShows = (query, type) => {
    const params = { query, type };
    if (type === 'band') {
      Axios.get('/api/shows/band', { params })
        .then((response) => {
          console.log(response);
        });
    } else if (type === 'venue') {
      Axios.get('/api/shows/venue', { params })
        .then((response) => {
          console.log(response);
        });
    } else if (type === 'genre') {
      // TODO: add dis
    } else if (type === 'date') {
      // TODO: add dis
    }
  };

  return (
    <div className="container-fluid" style={{ margin: 'auto' }}>
      <Container>
        <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
          <Col lg={2}>
            <Row style={{ padding: '10px' }}>
              <div className="add-page-form">
                <Form>
                  <Form.Group as={Row} controlId="formBand">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="band name"
                        value={band}
                        onChange={(e) => setBand(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formDate">
                    <Col sm={11}>
                      <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formVenue">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="Venue name"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formGenre">
                    <Col sm={11}>
                      <Form.Control
                        type="text"
                        placeholder="Genre name"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Button
                    as={Row}
                    type="reset"
                    onClick={() => getShows(venue, 'venue')}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Row>
            <Row>
              <div style={{ border: 'solid 1px green', padding: '10px' }}>
                List of Shows goes here
              </div>
            </Row>
          </Col>
          <Col style={{ padding: '5px' }} lg={10}>
            <div style={{ display: 'block', height: '90vh', width: '50vw' }}>
              <iframe
                style={{ height: '90vh', width: '40vw' }}
                src=""
                allowFullScreen
                title="map"
              />
            </div>
          </Col>
        </Row>
      </Container>
=======
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
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Band Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="mm/dd/yyy"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Venue</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Button variant="primary">
            Search
          </Button>
        </Form>
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
>>>>>>> 288715a... (update) Search view with new map and form
    </div>
  );
};

export default Search;
