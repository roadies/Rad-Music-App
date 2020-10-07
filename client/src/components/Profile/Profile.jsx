import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import profilepic from './sample_data/profilepic.jpg';
import PhotoCarousel from './PhotoCarousel';

const Profile = () => {
  const [bio, setBio] = useState('');
  const [status, setStatus] = useState('');
  const [displayBio, setDisplayBio] = useState('');
  const [displayStatus, setDisplayStatus] = useState('');

  // need a function to grab saved bio and status from database when page loads
  useEffect(() => {
    axios.get('/bio')
  }, []);

  // need a function to save/update bio and status to database



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
        <Col sm={4}>
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
            {displayBio}
          </div>
          <Form className="bio-form" style={{ marginTop: 10 }}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
            </Form.Group>
          </Form>
          <Button
            variant="outline-success"
            size="sm"
            block
            onClick={(e) => {
              e.preventDefault();
              setDisplayBio(bio);
              setBio('');
            }}
          >
            Update Bio
          </Button>
          <div className="calendar" style={calStyle}> Calendar </div>
        </Col>
        <Col md={8}>
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
            {displayStatus}
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />
            </Form.Group>
          </Form>
          <Button
            variant="outline-success"
            size="sm"
            block
            onClick={(e) => {
              e.preventDefault();
              setDisplayStatus(status);
              setStatus('');
            }}
          >
            Update Status
          </Button>
          <PhotoCarousel />
        </Col>
      </Row>
    </div>

  );
};

export default Profile;
