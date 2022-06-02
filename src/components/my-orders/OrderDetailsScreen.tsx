import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { sendMessage } from '../../helper/sendMessage';
import { ProductDetailsTopNavbar } from '../product/ProductDetailsTopNavbar';

export const OrderDetailsScreen = () => {
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
            <ProductDetailsTopNavbar productName="Order" />
            <h2 className="my_orders__title">Second level</h2>
            <Button className='mt-3' onClick={handleReturn}>Back</Button>
        </div>
    )
}
