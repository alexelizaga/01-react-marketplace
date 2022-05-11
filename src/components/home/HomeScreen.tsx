import { useEffect, useRef, useState } from 'react';

import '../../App.css';
import { sendMessage } from '../../helper/sendMessage';
import { ProductList } from '../product/ProductList';
import { SearchScreen } from '../search/SearchScreen';

export const HomeScreen = () => {

  const [offset, setOffset] = useState(0);
  const canSendHideNavbar = useRef(true);

  const showNavbar = () => {
    sendMessage({
      type: 'order',
      message: 'showNavbar'
    });
    canSendHideNavbar.current = true;
  }

  const hideNavbar = () => {
    sendMessage({
      type: 'order',
      message: 'hideNavbar'
    });
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
    sendMessage({
      type: 'order',
      message: 'showTabs'
    });
  }, []);

  return (
    <div className='HomeScreen'>
      <SearchScreen />
      <ProductList category={'Electrónica'} />
      <ProductList category={'Libros'} />
    </div>
  )
}
