import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Add = () => (
  <div className="add-page-container">
    <Container>
      <Row>
        <Row>
          <Col xs={10} md={8}>1 of 3</Col>
          <Col xs={2}>NavBar</Col>
        </Row>
      </Row>
    </Container>
  </div>
);

export default Add;
