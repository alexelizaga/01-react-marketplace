import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import '../App.css';

export const ProductDetailsTopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Market place</Navbar.Brand>
        <div className='space'></div>
        <Nav.Link href="#home">X</Nav.Link>
      </Container>
    </Navbar>
  )
}
