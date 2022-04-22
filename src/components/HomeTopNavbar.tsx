import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../App.css';

export const HomeTopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Market place demo</Navbar.Brand>
        <div className='space'></div>
      </Container>
    </Navbar>
  )
}
