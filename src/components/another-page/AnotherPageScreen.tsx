import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sendMessage } from '../../helper/sendMessage';
import { GenericErrorButton } from '../GenericErrorButton';

export const AnotherPageScreen = () => {
  const { pathname } = useLocation();

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
    <div className="my_orders__main">
      <h2 className="my_orders__title">Página: { pathname }</h2>
      <h3 className="my_orders__title">Primer nivel</h3>
      <Link className='btn btn-primary mt-3' to={'/page/123'}>Segundo nivel</Link>
      <GenericErrorButton />
    </div>
  )
}
