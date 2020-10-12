/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Form, FormLabel, Button, FormControl, Dropdown, DropdownButton, InputGroup,
} from 'react-bootstrap';
import SearchLocation from './SearchLocation';

const InputForm = ({
  addShow,
  bandName,
  date,
  details,
  genre,
  testLat,
  testLng,
  setSubmittedLat,
  setSubmittedLng,
  setLat,
  setLng,
  setName,
  setDate,
  setVenue,
  setDetails,
  setGenre,
  venue,
}) => {
  const onSubmit = () => {
    if (venue && bandName && date && genre && genre !== 'Select Genre') {
      setSubmittedLat(testLat);
      setSubmittedLng(testLng);
      setVenue(venue);
      setName(bandName);
      setDate(date);
      setDetails(details);
      setGenre(genre);
      addShow({
        bandName,
        date,
        details,
        genre,
        venue,
        lat: testLat,
        lng: testLng,
      });
      setTimeout(() => {
        setSubmittedLat();
        setSubmittedLng();
        setVenue();
        setName();
        setDate();
        setDetails();
        setGenre();
      }, 100);
    } else {
      window.alert('Must include venue, date, band name, and genre!');
    }
  };
  const [setupGenre, setSetupGenre] = useState('Select Genre');

  return (
    <div>
      <Form>
        <Form.Group>
          <FormLabel>
            <h1>PREVIEW YOUR BAND ADDITION!</h1>
            <br />
            <h4>Check the map!</h4>
          </FormLabel>
          <InputGroup>
            <FormControl
              placeholder="Enter Band Name Here"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={setupGenre}
              id="input-group-dropdown-2"
              onSelect={(e) => setSetupGenre(e)}
            >
              <Dropdown.Item eventKey="Alternative" href="#">Alternative</Dropdown.Item>
              <Dropdown.Item eventKey="Blues" href="#">Blues</Dropdown.Item>
              <Dropdown.Item eventKey="Classical" href="#">Classical</Dropdown.Item>
              <Dropdown.Item eventKey="Easy Listening" href="#">Easy Listening</Dropdown.Item>
              <Dropdown.Item eventKey="Electronic" href="#">Electronic</Dropdown.Item>
              <Dropdown.Item eventKey="Hip-Hop/Rap" href="#">Hip-Hop/Rap</Dropdown.Item>
              <Dropdown.Item eventKey="K-Pop" href="#">K-Pop</Dropdown.Item>
              <Dropdown.Item eventKey="Pop" href="#">Pop</Dropdown.Item>
              <Dropdown.Item eventKey="Rock" href="#">Rock</Dropdown.Item>
              <Dropdown.Item eventKey="R&B/Soul" href="#">R&B/Soul</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="https://i.imgur.com/7JQkwUo.png" target="_blank">Click Here to check where you fall under</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <Form.Group>
            <SearchLocation setLat={setLat} setLng={setLng} setVenue={setVenue} venue={venue} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Control
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            type="reset"
            onClick={() => onSubmit()}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputForm;
