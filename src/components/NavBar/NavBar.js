import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">S. Sabir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-5" href="#about">About</Nav.Link>
            <Nav.Link className="mr-5" href="#skill">Skills</Nav.Link>
            <Nav.Link className="mr-5" href="#Projects">Projects</Nav.Link>
            <Nav.Link className="mr-5" href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
};

export default NavBar;