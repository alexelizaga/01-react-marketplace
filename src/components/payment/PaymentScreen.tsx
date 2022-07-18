import { useEffect } from 'react';

import { sendMessage } from '../../helper/sendMessage';
import { CreditCard } from './CreditCard';

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

    const onOk = () => {
        sendMessage({
          action: 'mktpOrder',
          message: 'fullClose'
        });
      }
    
    return (
        <>
            <CreditCard
                name='Camen Product Owner'
                number='5412 3456 7890 1234'
                date='12/20'
                backgroundColor='#c0ca33'
            />
            <CreditCard
                name='Pablo Team Leader'
                number='5412 3456 7890 3412'
                date='12/20'
            />
            <h1>Error Genérico</h1>
            <button
                className='btn btn-outline-info m-1'
                onClick={ onOk }
            >
                Entendido
            </button>
        </>
    )
}
