import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Splash = ({ userLoggedIn, loginRedir }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="main-nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav style={{ width: '100%' }}>
          <Nav.Link onClick={() => loginRedir()}>Sign Up/Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="splash-div-image">
      <Image src="https://i.imgur.com/MTnaixW.png" alt="LOGO" fluid className="splash-image" fluid />
    </div>
  </div>
);
export default Splash;
