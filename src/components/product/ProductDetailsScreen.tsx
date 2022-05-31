import { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import '../../App.css';
import { ProductDetailsTopNavbar } from './ProductDetailsTopNavbar';
import { sendMessage } from '../../helper/sendMessage';
import { getProductById } from '../../selectors/getProductById';
import { useDispatch, useSelector } from 'react-redux';
import { shopAddItem } from '../../actions/shopActions';


export const ProductDetailsScreen = () => {

  const { shoppingcard } = useSelector<any, any>(state => state.shop);
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useMemo(() => getProductById(productId), [productId]);

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

  const cancel = () => {
    sendMessage({
      action: 'mktpOrder',
      message: 'cancel'
    });
  }

  const buyItem = (productName: string) => {
    dispatch( shopAddItem(productName) )
    sendMessage({
      action: 'mktpStatus',
      message: 'shoppingcartFull'
    });
  }

  if (!product) {
    return <Navigate to='/' />
  }

  const {
    id,
    productName,
    productPublisher,
    productCategory,
    productDescription
  } = product;

  const imgPath = `/assets/products/${id}.jpg`;

  return (
    <div className='ProductDetailsScreen'>
      <ProductDetailsTopNavbar productName={productName} />
      
      <div className='row'>
        <div className='col-4'>
          <img
            className='img-thumbnail animate__animated animate__fadeInLeft'
            src={imgPath}
            alt={productName}
          />
        </div>
        <div className='col-8 animate__animated animate__fadeIn'>
          <h3>{productName}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Publisher:</b> {productPublisher}
            </li>
            <li className='list-group-item'>
              <b>Categoría:</b> {productCategory}
            </li>
          </ul>
          <h5 className='mt-5'>Descripción</h5>
          <p>{productDescription}</p>
          <button
            className='btn btn-outline-info m-1 ProductCard__btn'
            onClick={() => buyItem(productName)}
          >
            Comprar
          </button>
          <button
            className='btn btn-outline-info m-1 ProductCard__btn'
            onClick={cancel}
          >
            Cancelar
          </button>
        </div>
      </div>
      <div className='row mt-2'>
        Carrito: { shoppingcard?.length || '0' }
      </div>
    </div>
  )
}
