import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Add = () => (
  <div as={Container} className="addPageView">
    <div as={Container} className="addPageContainer" style={{ border: 'solid 3px blue', padding: '5px', marginTop: '30px' }}>
      <Row>
        <Col><div style={{ border: 'solid 10px red', padding: '100px', marginTop: '10px' }} /></Col>
        <Col md="auto" />
        <Col xs lg={2}>
          <div className="add-nav" style={{ backgroundColor: '#C4C4C4', padding: '10px', marginTop: '30px' }}>
            <Row>
              Insert Add Page
            </Row>
            <Row>
              Insert Search Page
            </Row>
            <Row>
              Insert Profile Page
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Add;
