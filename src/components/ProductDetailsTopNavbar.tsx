import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

import '../App.css';
import { sendMessage } from '../helper/sendMessage';


export const ProductDetailsTopNavbar = () => {
  const close = () => {
    sendMessage({
      type: 'order',
      message: 'close'
    });
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
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
        <Nav.Link onClick={close}><CloseButton /></Nav.Link>

      </Container>
    </Navbar>
  )
}
