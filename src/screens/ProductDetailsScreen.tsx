import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

import '../App.css';
import { ProductDetailsTopNavbar } from '../components/ProductDetailsTopNavbar';
import { sendMessage } from '../helper/sendMessage';

export const ProductDetailsScreen = () => {
  const [shopList, setShopList] = useState(0);

  useEffect(() => {
    sendMessage({
      type: 'order',
      message: 'hideNavbar'
    });
    sendMessage({
      type: 'order',
      message: 'hideTabs'
    });
  }, []);

  const cancel = () => {
    sendMessage({
      type: 'order',
      message: 'cancel'
    });
  }

  const buyItem = () => {
    setShopList(shopList + 1);
    sendMessage({
      type: 'status',
      message: 'buying'
    });
  }

  const deleteItem = () => {
    setShopList(0);
    sendMessage({
      type: 'status',
      message: 'notBuying'
    });
  }

  return (
    <div className='ProductDetailsScreen'>
      <ProductDetailsTopNavbar />
      <h1 className='ProductDetailsScreen__title'>Beats solo pro</h1>
      <h2 className='ProductDetailsScreen__title'>Carrito: {shopList}</h2>
      <Nav.Link onClick={buyItem}>Comprar</Nav.Link>
      <Nav.Link onClick={deleteItem}>Borrar comprar</Nav.Link>
      <Nav.Link onClick={cancel}>Cancelar compra</Nav.Link>
    </div>
  )
}
