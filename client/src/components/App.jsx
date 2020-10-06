/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  Container, Row, Col, Nav, Form, Navbar,
} from 'react-bootstrap';
import Add from './Add/Add';
import Landing from './Landing/Landing';
import Profile from './Profile/Profile';
import Splash from './splash/Splash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Home',
      isLoggedIn: true,
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === 'Home') {
      return <Landing />;
    } if (view === 'Add') {
      return <Add />;
    } if (view === 'Search') {
      return (<div>This is Search Page</div>);
    } if (view === 'Profile') {
      return <Profile />;
    }
    return <Splash />;
  }

  render() {
    const { isLoggedIn, view } = this.state;
    if (!isLoggedIn) {
      return (
        <div>
          <Splash />
        </div>
      );
    }
    return (
      <div className="Page-JSX-View-Container">
        <div as={Container} style={{ border: 'solid red 2px' }}>
          <Row>
            <Col xs={10}>
              {/* This is view */}
              <div as={Container} style={{ border: 'solid blue 2px', padding: '10px', height: '100%' }}>
                {this.renderView()}
              </div>
            </Col>
            <Col xs={2}>
              {/* This is the nav */}
              <div as={Container} style={{ border: 'solid blue 2px', height: '100vh', backgroundColor: '#c4c4c4' }}>
                <Navbar>
                  <Nav defaultActiveKey="/home" className="flex-column">
                    {/* <Nav.Link onClick={() => { console.log('This HAS BEEN CLICKED') }}>Add</Nav.Link> */}
                    <Nav.Link onClick={() => { this.changeView('Add'); }}>Add</Nav.Link>
                    <Nav.Link onClick={() => { this.changeView('Search'); }}>Search</Nav.Link>
                    <Nav.Link onClick={() => { this.changeView('Profile'); }}>Profile</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav>
                </Navbar>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
