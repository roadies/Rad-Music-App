import React from 'react';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';

const Add = () => (
  <div className="container-fluid" style={{ margin: 'auto' }}>
    <Container>
      <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
        <Col style={{ }} lg={2}>
          <div className="add-page-form">
            <Form>
              <Col>
                <Row>
                  <Form.Control placeholder="Band Name" />
                </Row>
                <Row>
                  <Form.Control placeholder="Date" />
                </Row>
                <Row>
                  <Form.Control placeholder="Venue" />
                </Row>
                <Row>
                  <Form.Control placeholder="Genre" />
                </Row>
                <Row>
                  <Form.Control as="textarea" placeholder="Details" />
                </Row>
                <Row>
                  <div style={{ border: 'solid 1px black', borderRadius: '3px' }}>
                    Preview of info
                  </div>
                </Row>
              </Col>
            </Form>
          </div>
        </Col>
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

export default Add;
