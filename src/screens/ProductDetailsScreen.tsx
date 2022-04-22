import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../App.css';
import { ProductDetailsTopNavbar } from '../components/ProductDetailsTopNavbar';

export const ProductDetailsScreen = () => {
  useEffect(() => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'hideNavbar'
      },
      "*"
    );
    window.parent.postMessage(
      {
        type: "order",
        message: 'hideTabs'
      },
      "*"
    );
  }, []);

  const cancel = () => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'cancel'
      },
      "*"
    );
  }

  return (
    <div className='ProductDetailsScreen'>
      <ProductDetailsTopNavbar />
      <h1 className='ProductDetailsScreen__title'>Detalles del producto</h1>
      <Nav.Link onClick={cancel}>Cancelar compra</Nav.Link>
    </div>
  )
}
