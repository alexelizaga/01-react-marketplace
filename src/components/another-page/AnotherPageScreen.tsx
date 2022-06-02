import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sendMessage } from '../../helper/sendMessage';

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
      <h1 className="my_orders__title">Page: { pathname }</h1>
      <h2 className="my_orders__title">First level</h2>
      <Link className='btn btn-primary mt-3' to={'/page/123'}>Detail Page</Link>
    </div>
  )
}
