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
                  Alternative
                </Dropdown.Item>
                <Dropdown.Item
                  value="blues"
                  onSelect={() => {
                    setGenre('blues');
                    setSetupGenre('blues');
                  }}
                >
                  Blues

                </Dropdown.Item>
                <Dropdown.Item
                  value="classical"
                  onSelect={() => {
                    setGenre('classical');
                    setSetupGenre('classsical');
                  }}
                >
                  Classical

                </Dropdown.Item>
                <Dropdown.Item
                  value="easy listening"
                  onSelect={() => {
                    setGenre('easy listening');
                    setSetupGenre('easy listening');
                  }}
                >
                  Easy Listening

                </Dropdown.Item>
                <Dropdown.Item
                  value="electronic"
                  onSelect={() => {
                    setGenre('electronic');
                    setSetupGenre('electronic');
                  }}
                >
                  Electronic

                </Dropdown.Item>
                <Dropdown.Item
                  value="hip-hop/rap"
                  onSelect={() => {
                    setGenre('Hip-Hop/Rap');
                    setSetupGenre('Hip-Hop/Rap');
                  }}
                >
                  Hip-Hop/Rap

                </Dropdown.Item>
                <Dropdown.Item
                  value="k-pop"
                  onSelect={() => {
                    setGenre('K-Pop');
                    setSetupGenre('K-Pop');
                  }}
                >
                  K-Pop

                </Dropdown.Item>
                <Dropdown.Item
                  value="pop"
                  onSelect={() => {
                    setGenre('Pop');
                    setSetupGenre('Pop');
                  }}
                >
                  Pop

                </Dropdown.Item>
                <Dropdown.Item
                  value="rock"
                  onSelect={() => {
                    setGenre('Rock');
                    setSetupGenre('Rock');
                  }}
                >
                  Rock

                </Dropdown.Item>
                <Dropdown.Item
                  value="r&b/soul"
                  onSelect={() => {
                    setGenre('R&B/Soul');
                    setSetupGenre('R&B/Soul');
                  }}
                >
                  R&B/Soul

                </Dropdown.Item>
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
