/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  Container, Row, Col, Nav, Navbar,
} from 'react-bootstrap';
import Add from './Add/Add';
import Landing from './Landing/Landing';
import Map from './test/TestMap';
import Profile from './Profile/Profile';
import Search from './search/Search';
import Splash from './splash/Splash';

//COMMENT TEST
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Home',
      isLoggedIn: false,
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: false,
    });
  }

  userLoggedIn() {
    this.setState({
      isLoggedIn: true,
    });
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
      return <Search />;
    } if (view === 'Profile') {
      return <Profile />;
    } if (view === 'Map') {
      return <Map />;
    }
    return <Splash userLoggedIn={this.userLoggedIn} />;
  }

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      return (
        <div>
          <Splash />
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
                {this.renderView()}
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
                    <Nav.Link onClick={() => { this.changeView('Add'); }}>Add</Nav.Link>
                    <Nav.Link onClick={() => { this.changeView('Search'); }}>Search</Nav.Link>
                    <Nav.Link onClick={() => { this.changeView('Profile'); }}>Profile</Nav.Link>
                    <Nav.Link onClick={() => { this.changeView('Map'); }}>
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
  }
}
// whatever

export default App;
