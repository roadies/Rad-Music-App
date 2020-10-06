import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <input type="text" style={{ height: 50, width: 250 }} />
            <button className="bio_button" type="submit"> Update Bio </button>
          </Col>
          <Col md={6}>
            <input type="text" style={{ width: '100%' }} />
            <button className="status_button" type="submit"> Update Status </button>
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
