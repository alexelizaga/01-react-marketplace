import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { sendMessage } from '../../helper/sendMessage';
import { GenericErrorButton } from '../GenericErrorButton';

export const MyOrdersScreen = () => {

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
      <h1 className="my_orders__title">My Orders</h1>
      <h2 className="my_orders__title">First level</h2>
      <Link className='btn btn-primary mt-3' to={'/order/123'}>Order</Link>
      <GenericErrorButton />
    </div>
  )
}
