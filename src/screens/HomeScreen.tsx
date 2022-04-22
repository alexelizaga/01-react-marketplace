import React, { useEffect, useRef, useState } from 'react';

import '../App.css';
import { HomeTopNavbar } from '../components/HomeTopNavbar';
import { ProductCard } from '../components/ProductCard';

export const HomeScreen = () => {

  const n: number = 50;

  const [offset, setOffset] = useState(0);
  const canSendHideNavbar = useRef(true);

  const showNavbar = () => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'showNavbar'
      },
      "*"
    );
    canSendHideNavbar.current = true;
  }

  const hideNavbar = () => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'hideNavbar'
      },
      "*"
    );
    canSendHideNavbar.current = false;
  }

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if(offset === 0) {
    showNavbar();
  }

  if(canSendHideNavbar.current && offset >= 20) {
    hideNavbar();
  }

  useEffect(() => {
    window.parent.postMessage(
      {
        type: "order",
        message: 'showTabs'
      },
      "*"
    );
  }, []);

  return (
    <div className='HomeScreen'>
      <HomeTopNavbar />
      {
        [...Array(n)].map((e,index) => <ProductCard key={index} />)
      }
    </div>
  )
}
