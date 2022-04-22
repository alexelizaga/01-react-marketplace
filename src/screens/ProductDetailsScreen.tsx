import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import { ProductDetailsTopNavbar } from '../components/ProductDetailsTopNavbar';

export const ProductDetailsScreen = () => {
  return (
    <div className='ProductDetailsScreen'>
      <ProductDetailsTopNavbar />
      <h1 className='ProductDetailsScreen__title'>Detalles del producto</h1>
      <Link className='ProductCard__btn' to="/product">Cancelar compra</Link>
    </div>
    
  )
}
