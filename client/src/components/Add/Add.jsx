import React from 'react';
import {
  Container, Row, Col, Nav, Form, Navbar,
} from 'react-bootstrap';

const Add = () => (
  <div as={Container} className="addPageView">
    <div
      as={Container}
      className="addPageContainer"
      style={{ padding: '5px', marginTop: '0px', textAlign: 'center' }}
    >
      <Row>
        <Col>
          <div
            as={Container}
            style={{ padding: '50px', textAlign: 'center' }}
          >
            <Col>
              <div as={Container} className="App-page-form">
                <Col>
                  <Form>
                    <Form.Row>
                      <Col xs={2}>
                        <Form.Control placeholder="Band Name" />
                      </Col>
                      <Col xs={2}>
                        <Form.Control placeholder="Venue" />
                      </Col>
                      <Col xs={2}>
                        <Form.Control placeholder="Date" />
                      </Col>
                      <Col xs={2}>
                        <Form.Control placeholder="Genre" />
                      </Col>
                      <Col xs={2}>
                        <Form.Control placeholder="Details" />
                      </Col>
                    </Form.Row>
                  </Form>
                </Col>
              </div>
            </Col>
            <Col>
              <div as={Container}>
                <div
                  as={Container}
                  style={{ padding: '5px', display: 'flex', textAlign: 'center' }}
                >
                  <div>
                    <iframe style={{ display: 'flex', height: '800px', width: '1200px' }} src="https://www.google.com/maps/embed/v1/view?zoom=10&center=29.9511%2C-90.0715&key=" allowFullScreen title="map" />
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Col>
        <Col md="auto" />
        <Col xs md={2}>
        </Col>
      </Row>
    </div>
  </div>
);

export default Add;
