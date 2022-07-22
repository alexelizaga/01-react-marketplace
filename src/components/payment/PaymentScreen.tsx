import { useEffect } from 'react';

import { sendMessage } from '../../helper/sendMessage';
import { CreditCard } from './CreditCard';
import { GenericErrorButton } from '../GenericErrorButton';

export const PaymentScreen = () => {

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
        <>
            <h1 className='mt-1'>Tarjetas</h1>
            <CreditCard
                name='Carmen Product Owner'
                number='5412 3456 7890 1234'
                date='12/20'
                backgroundColor='#c0ca33'
            />
            <CreditCard
                name='Pablo Team Leader'
                number='5412 3456 7890 3412'
                date='12/20'
            />
            <GenericErrorButton />
        </>
    )
}
