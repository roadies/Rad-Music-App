import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilepic from './sample_data/profilepic.jpg';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <img src={profilepic} alt="cat in vest" style={{ height: 250, width: 250 }} />
            <div className="bio"> My name is Mittens.  I am 6 years old.  I love punk rock. </div>
            <input type="text" style={{ height: 50, width: 250 }} />
            <button className="bio_button" type="submit"> Update Bio </button>
          </Col>
          <Col md={6}>
            Status update and selected images go here
          </Col>
          <Col md={3}>
            Navbar goes here
          </Col>
        </Row>
      </Container>
      // <div>
      //   <img src={profilepic} alt="cat in vest" />
      //   <div className="bio"> My name is Mittens.  I am 6 years old.  I love punk rock. </div>
      //   <input type="text" style={{ height: 50, width: 250 }} />
      //   <button className="bio_button" type="submit"> Update Bio </button>
      // </div>
    );
  }
}

export default Profile;
