import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My Cases</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#"> Register </Nav.Link>
        <Nav.Link href="#"> Search </Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default AppNavbar;
