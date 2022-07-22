import { sendMessage } from '../helper/sendMessage';

export const GenericErrorButton = () => {

    const onOk = () => {
        sendMessage({
          action: 'mktpOrder',
          message: 'fullClose'
        });  
    }

    return (
        <div>
            <h1 className='mt-5'>Error Genérico</h1>
            <button
                className='btn btn-outline-info m-1 mb-5'
                onClick={ onOk }
            >
                Entendido
            </button>
        </div>
    )
}
