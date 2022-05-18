import { useContext } from 'react';

import { AuthContext } from '../../auth/authContext';
import { ProductDetailsTopNavbar } from '../product/ProductDetailsTopNavbar';
import { sendMessage } from '../../helper/sendMessage';
import { types } from '../../types/types';

export const ShoppingcardScreen = () => {
  const { user, dispatch } = useContext(AuthContext);

  const deleteItem = () => {
    dispatch({
      type: types.deleteItem
    });

    sendMessage({
      action: 'mktpStatus',
      message: 'shoppingcartEmpty'
    });
  }

  return (
    <>
      <ProductDetailsTopNavbar productName={`Carrito: ${user.shoppingcard.length}`} />
      Carrito: { user.shoppingcard.length }

      <ul className='mt-2'>
        {
          user.shoppingcard.map( (shoppingItem: any, index: number) => (
            <li key={ shoppingItem + index }>{ `${shoppingItem}, `  }</li>
          ))
        }
      </ul>

      {
        ( user.shoppingcard.length ) && (
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
