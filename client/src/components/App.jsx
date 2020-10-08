import Axios from 'axios';
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Nav, Navbar,
} from 'react-bootstrap';
import Add from './Add/Add';
import Landing from './Landing/Landing';
// import Map from './test/TestMap';
import Profile from './Profile/Profile';
import Search from './search/Search';
import Splash from './splash/Splash';

const App = () => {
  const [view, setView] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const loginRedir = () => {
    // TODO: fix this with react router
    window.location = 'http://localhost:3000/api/oauth/google';
  };

  const renderView = () => {
    if (view === 'Home') {
      return <Landing />;
    } if (view === 'Add') {
      return <Add />;
    } if (view === 'Search') {
      return <Search />;
    } if (view === 'Profile') {
      return <Profile />;
    } if (view === 'Map') {
      return <Map />;
    }
    return <Splash />;
  };

  if (!isLoggedIn) {
    return (
      <div>
        <Splash loginRedir={loginRedir} />
      </div>
    );
  }

  return (
    <div className="Page-JSX-View-Container">
      <div
        as={Container}
        style={{
          // border: 'solid red 2px',
        }}
      >
        <Row>
          <Col xs={10}>
            {/* This is view */}
            <div
              as={Container}
              style={{
                // border: 'solid blue 2px',
                margin: '0 0 auto',
                height: '100%',
              }}
            >
              {renderView()}
            </div>
          </Col>
          <Col xs={2}>
            {/* This is the nav */}
            <div
              as={Container}
              style={{
                // border: 'solid blue 2px',
                height: '90vh',
                backgroundColor: '#313840',
              }}
            >
              <Navbar variant="dark">
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Item style={{ color: '#d2d2d2' }}>Insert Profile Name</Nav.Item>
                  <Nav.Link onClick={() => { setView('Add'); }}>Add</Nav.Link>
                  <Nav.Link onClick={() => { setView('Search'); }}>Search</Nav.Link>
                  <Nav.Link onClick={() => { setView('Profile'); }}>Profile</Nav.Link>
                  <Nav.Link onClick={() => { setView('Map'); }}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
