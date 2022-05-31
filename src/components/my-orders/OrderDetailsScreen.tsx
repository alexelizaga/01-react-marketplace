import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { sendMessage } from '../../helper/sendMessage';

export const OrderDetailsScreen = () => {

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

    return (
        <div className="my_orders__main">
        <h1 className="my_orders__title">Order Detail</h1>
        <h2 className="my_orders__title">Second level</h2>
        <Link to={'/marketplace_my_orders'}>Back</Link>
        </div>
    )
}
