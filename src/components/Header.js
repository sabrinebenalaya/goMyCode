import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Login</Nav.Link>
        <Nav.Link href="#">Users</Nav.Link>
        <Nav.Link href="#">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default header