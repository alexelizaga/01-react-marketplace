import { useDispatch, useSelector } from 'react-redux';

import { ProductDetailsTopNavbar } from '../product/ProductDetailsTopNavbar';
import { sendMessage } from '../../helper/sendMessage';
import { shopDeleteItem } from '../../actions/shopActions';


export const ShoppingcardScreen = () => {

  const { shoppingcard } = useSelector<any, any>(state => state.shop);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch( shopDeleteItem() );

    sendMessage({
      action: 'mktpStatus',
      message: 'shoppingcartEmpty'
    });
  }

  return (
    <>
      <ProductDetailsTopNavbar productName={`Carrito: ${shoppingcard.length}`} />
      Carrito: { shoppingcard.length }

      <ul className='mt-2'>
        {
          shoppingcard.map( (shoppingItem: any, index: number) => (
            <li key={ shoppingItem + index }>{ `${shoppingItem}, `  }</li>
          ))
        }
      </ul>

      {
        ( shoppingcard.length ) && (
          <button
            className='btn btn-outline-info m-1'
            onClick={ deleteItem }
          >
            Borrar carta
          </button>
        )
      }
    </>
  )
}
