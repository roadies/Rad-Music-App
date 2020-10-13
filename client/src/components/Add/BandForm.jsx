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
      <div style={{ float: 'left', marginLeft: '200px' }}>
        <Form style={{ width: '500px' }}>
          <Form.Group>
            <FormLabel>
              <p style={{ fontSize: '36pt' }}>Add a Band!</p>
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
              >
                <Dropdown.Item
                  value="alternative"
                  onSelect={() => {
                    setGenre('alternative');
                    setSetupGenre('alternative');
                  }}
                >
                  alternative
                </Dropdown.Item>
                <Dropdown.Item
                  value="blues"
                  onSelect={() => {
                    setGenre('blues');
                    setSetupGenre('blues');
                  }}
                >
                  blues

                </Dropdown.Item>
                <Dropdown.Item
                  value="classical"
                  onSelect={() => {
                    setGenre('classical');
                    setSetupGenre('classical');
                  }}
                >
                  classical

                </Dropdown.Item>
                <Dropdown.Item
                  value="chill"
                  onSelect={() => {
                    setGenre('chill');
                    setSetupGenre('chill');
                  }}
                >
                  chill

                </Dropdown.Item>
                <Dropdown.Item
                  value="country"
                  onSelect={() => {
                    setGenre('country');
                    setSetupGenre('country');
                  }}
                >
                  country

                </Dropdown.Item>
                <Dropdown.Item
                  value="electronic"
                  onSelect={() => {
                    setGenre('electronic');
                    setSetupGenre('electronic');
                  }}
                >
                  electronic

                </Dropdown.Item>
                <Dropdown.Item
                  value="hip-hop"
                  onSelect={() => {
                    setGenre('hip-hop');
                    setSetupGenre('hip-hop');
                  }}
                >
                  hip-hop

                </Dropdown.Item>
                <Dropdown.Item
                  value="jazz"
                  onSelect={() => {
                    setGenre('jazz');
                    setSetupGenre('jazz');
                  }}
                >
                  jazz

                </Dropdown.Item>
                <Dropdown.Item
                  value="k-pop"
                  onSelect={() => {
                    setGenre('k-pop');
                    setSetupGenre('k-pop');
                  }}
                >
                  k-pop

                </Dropdown.Item>
                <Dropdown.Item
                  value="metal"
                  onSelect={() => {
                    setGenre('metal');
                    setSetupGenre('metal');
                  }}
                >
                  metal

                </Dropdown.Item>
                <Dropdown.Item
                  value="pop"
                  onSelect={() => {
                    setGenre('pop');
                    setSetupGenre('pop');
                  }}
                >
                  pop

                </Dropdown.Item>
                <Dropdown.Item
                  value="punk"
                  onSelect={() => {
                    setGenre('punk');
                    setSetupGenre('punk');
                  }}
                >
                  punk

                </Dropdown.Item>
                <Dropdown.Item
                  value="rock"
                  onSelect={() => {
                    setGenre('rock');
                    setSetupGenre('rock');
                  }}
                >
                  rock

                </Dropdown.Item>
                <Dropdown.Item
                  value="r-n-b"
                  onSelect={() => {
                    setGenre('r-n-b');
                    setSetupGenre('r-n-b');
                  }}
                >
                  r&b

                </Dropdown.Item>
                <Dropdown.Item
                  value="world-music"
                  onSelect={() => {
                    setGenre('world-music');
                    setSetupGenre('world-music');
                  }}
                >
                  world music

                </Dropdown.Item>
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
              variant="outline-success"
              onClick={() => onSubmit()}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default InputForm;
