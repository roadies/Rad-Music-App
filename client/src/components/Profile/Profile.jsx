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
    const imgStyle = {
      height: 150,
      width: 150,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px',
      marginBottom: '20px',
    };
    const calStyle = {
      height: 250,
      width: 250,
      border: '2px solid #000',
      borderRadius: '5px',
      margin: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    return (
      <div as={Container}>
        <Row>
          <Col sm={3}>
            <img src={profilepic} alt="cat in vest" style={imgStyle} />
            <div
              className="bio"
              style={{
                height: 100,
                width: 250,
                border: '1px solid #000',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {' '}
              My name is Mittens.  I am 6 years old.  I love punk rock.
            </div>
            <Form className="bio-form" style={{ marginTop: 10 }}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <Button variant="outline-success" size="sm" block>
              Update Bio
            </Button>
            <div className="calendar" style={calStyle}> Calendar </div>
          </Col>
          <Col md={6}>
            <div
              className="status"
              style={{
                height: 100,
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 25,
                marginBottom: 10,
                border: '1px solid #000',
              }}
            >
              Woo I cannot wait to go see Le Tigre tomorrow night!
            </div>
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
