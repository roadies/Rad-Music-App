import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = () => (
  <div className="container-fluid" style={{ margin: 'auto' }}>
    <Container>
      <Row style={{ alignSelf: 'center' }}>
        <div style={{ padding: '5px' }}>
          These *genre* shows were found nearby!
        </div>
      </Row>
      <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
        <Col style={{ padding: '5px' }} lg={10}>
          <div style={{ display: 'block', height: '90vh', width: '50vw' }}>
            <iframe
              style={{ height: '90vh', width: '60vw' }}
              src=""
              allowFullScreen
              title="map"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Landing;
