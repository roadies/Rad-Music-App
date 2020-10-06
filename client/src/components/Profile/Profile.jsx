import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profilepic from './sample_data/profilepic.jpg';
import Photos from './Photos';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div as={Container}>
        <Row>
          <Col sm={3}>
            <img src={profilepic} alt="cat in vest" style={{ height: 250, width: 250 }} />
            <div className="bio"> My name is Mittens.  I am 6 years old.  I love punk rock. </div>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <Button variant="outline-success" size="sm" block>
              Update Bio
            </Button>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <Button variant="outline-success" size="sm" block>
              Update Status
            </Button>
            <Photos />
          </Col>
          <Col sm={3}>
            Navbar goes here
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
