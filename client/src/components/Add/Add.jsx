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
          <div
            className="app-page-nav"
            style={{
              backgroundColor: '#313840', height: '100%', display: 'flex', marginTop: '0px', textAlign: 'center',
            }}
          >
            <div as={Container} className="add-nav" style={{ marginTop: '100px', textAlign: 'center' }}>
              <Col>
                <Navbar variant="dark">
                  <Nav defaultActiveKey="/home" className="flex-column">
                    <div className="navbar-info" style={{ textAlign: 'center' }}>
                      <img src="https://i.imgur.com/xRAaYI3.jpg" alt="profile pic" style={{ height: '100px', width: '100px', borderRadius: '10px' }} />
                      <div style={{ fontSize: '10pt', color: '#d2d2d2' }}>
                        Larry Schwall
                      </div>
                    </div>
                    <Nav.Link href="#">Add an Event</Nav.Link>
                    <Nav.Link eventKey="link-1">Search</Nav.Link>
                    <Nav.Link eventKey="link-2">Profile</Nav.Link>
                    <Nav.Link>Logout</Nav.Link>
                  </Nav>
                </Navbar>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Add;
