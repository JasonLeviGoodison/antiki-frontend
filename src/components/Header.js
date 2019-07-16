import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CompanyName } from '../App.js';

function Header() {
  return (
    <div className="header" >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"> {CompanyName} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
  );
}

export default Header;