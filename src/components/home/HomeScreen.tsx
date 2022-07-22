import { useEffect } from 'react';

import '../../App.css';
import { sendMessage } from '../../helper/sendMessage';
import { ProductList } from '../product/ProductList';
import { SearchScreen } from '../search/SearchScreen';
import { GenericErrorButton } from '../GenericErrorButton';

export const HomeScreen = () => {

  // const [offset, setOffset] = useState(0);
  // const canSendHideNavbar = useRef(true);

  // const showNavbar = () => {
  //   sendMessage({
  //     action: 'mktpOrder',
  //     message: 'showNavbar'
  //   });
  //   canSendHideNavbar.current = true;
  // }

  // const hideNavbar = () => {
  //   sendMessage({
  //     action: 'mktpOrder',
  //     message: 'hideNavbar'
  //   });
  //   canSendHideNavbar.current = false;
  // }

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);

  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
    
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  // if(offset === 0) {
  //   showNavbar();
  // }

  // if(canSendHideNavbar.current && offset >= 20) {
  //   hideNavbar();
  // }

  useEffect(() => {
    sendMessage({
      action: 'mktpOrder',
      message: 'showTabs'
    });
    sendMessage({
      action: 'mktpOrder',
      message: 'showNavbar'
    });
  }, []);

  return (
    <div className='HomeScreen'>
      <SearchScreen />
      <ProductList category={'Electrónica'} />
      <ProductList category={'Libros'} />
      <GenericErrorButton />
    </div>
  )
}
