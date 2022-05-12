import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../../App.css';
import { sendMessage } from '../../helper/sendMessage';


export const ProductDetailsTopNavbar = ({ productName = 'producto' }) => {
  const navigate = useNavigate();
  
  const close = () => {
    sendMessage({
      action: 'mktpOrder',
      message: 'close'
    });
  }

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand onClick={handleReturn} as={Link} to="/">
          <i className="icon-size bi bi-arrow-left-short"></i>
        </Navbar.Brand>
        <div className='space'></div>
        <Navbar.Brand as={Link} to="/">
          {/* <img
            alt=""
            src="/assets/red.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          <span className='navbar-title'>{ productName }</span>
        </Navbar.Brand>
        <div className='space'></div>
        <Navbar.Brand onClick={close}>
          <i className="icon-size bi bi-x"></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
