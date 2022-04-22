import React from 'react';

import '../App.css';
import { HomeTopNavbar } from '../components/HomeTopNavbar';
import { ProductCard } from '../components/ProductCard';

export const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
      <HomeTopNavbar />
      <ProductCard />
    </div>
  )
}
