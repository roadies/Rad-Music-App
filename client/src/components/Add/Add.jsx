import React from 'react';
import {
  Container, Row, Col, Nav,
} from 'react-bootstrap';

const Add = () => (
  <div as={Container} className="addPageView">
    <div as={Container} className="addPageContainer" style={{ border: 'solid 3px blue', padding: '5px', marginTop: '30px' }}>
      <Row>
        <Col><div style={{ border: 'solid 4px red', padding: '100px' }} /></Col>
        <Col md="auto" />
        <Col xs md={2}>
          <div as={Container} className="add-nav" style={{ backgroundColor: '#C4C4C4', padding: '10px', display: 'flex' }}>
            <Col>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#">Add an Event</Nav.Link>
                <Nav.Link eventKey="link-1">Search</Nav.Link>
                <Nav.Link eventKey="link-2">Profile</Nav.Link>
                <Nav.Link>Logout</Nav.Link>
              </Nav>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Add;
