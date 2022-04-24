import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import '../App.css';

export const HomeTopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/assets/red.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Market place demo
        </Navbar.Brand>
        <div className='space'></div>
      </Container>
    </Navbar>
  )
}
