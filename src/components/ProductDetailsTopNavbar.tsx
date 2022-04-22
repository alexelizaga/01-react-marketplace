import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import '../App.css';


export const ProductDetailsTopNavbar = () => {
  const close = () => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'close'
      },
      "*"
    );
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Market place demo</Navbar.Brand>
        <Nav.Link as={Link} to="/" >Home</Nav.Link>
        <div className='space'></div>
        <Nav.Link onClick={close}>X</Nav.Link>
      </Container>
    </Navbar>
  )
}
