import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ProductDetailsTopNavbar } from '../product/ProductDetailsTopNavbar';
import { useEffect } from 'react';
import { sendMessage } from '../../helper/sendMessage';

export const AnotherPageDetailScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sendMessage({
        action: 'mktpOrder',
        message: 'hideNavbar'
    });
    sendMessage({
        action: 'mktpOrder',
        message: 'hideTabs'
    });
  }, []);

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className="my_orders__main">
        <ProductDetailsTopNavbar productName="Page Detail" />
        <h2 className="my_orders__title">Segundo nivel</h2>
        <Button className='mt-3' onClick={handleReturn}>Primer nivel</Button>
    </div>
  )
}
