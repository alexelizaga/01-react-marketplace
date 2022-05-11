import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import '../../App.css';
import { ProductDetailsTopNavbar } from './ProductDetailsTopNavbar';
import { sendMessage } from '../../helper/sendMessage';
import { getProductById } from '../../selectors/getProductById';


export const ProductDetailsScreen = () => {
  const [shopList, setShopList] = useState(0);
  const { productId } = useParams();

  const product = useMemo(() => getProductById(productId), [productId]);

  useEffect(() => {
    sendMessage({
      type: 'order',
      message: 'hideNavbar'
    });
    sendMessage({
      type: 'order',
      message: 'hideTabs'
    });
  }, []);

  const cancel = () => {
    sendMessage({
      type: 'order',
      message: 'cancel'
    });
  }

  const buyItem = () => {
    setShopList(shopList + 1);
    sendMessage({
      type: 'status',
      message: 'buying'
    });
  }

  const deleteItem = () => {
    setShopList(0);
    sendMessage({
      type: 'status',
      message: 'notBuying'
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

  const imgPath = `/assets/heroes/${id}.jpg`;

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
            className='btn btn-outline-info m-1'
            onClick={buyItem}
          >
            Comprar
          </button>
          <button
            className='btn btn-outline-info m-1'
            onClick={cancel}
          >
            Cancelar
          </button>
        </div>
      </div>

      {
        (shopList !== 0) && (
          <>
            <h2 className='ProductDetailsScreen__title'>Carrito: {shopList}</h2>
            <Nav.Link onClick={deleteItem}>Borrar</Nav.Link>
          </>
        )
      }
    </div>
  )
}
