import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Search = () => {
  const [band, setBand] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <div as={Container} className="searchView">
      <Row>
        <Col>
          <div as={Container} className="mapAndList">
            <Row>
              <Col>
                <div className="searchList">
                  list of shows
                </div>
              </Col>
              <Col>
                <div className="mapView">
                  map
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div className="searchCriteria">
            search criteria
            <Form>
              <Form.Group as={Row} controlId="formBand">
                <Form.Label column sm={2}>
                  Band:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="band name"
                    value={band}
                    onChange={(e) => setBand(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formDate">
                <Form.Label column sm={2}>
                  Date:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formVenue">
                <Form.Label column sm={2}>
                  Venue:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Venue name"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formGenre">
                <Form.Label column sm={2}>
                  Genre:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Genre name"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Search;
