import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  productName,
  productDescription,
  productPublisher
}: any) => {
  const imagePath = `/assets/heroes/${id}.jpg`;
return (
    <div className='card animate__animated animate__fadeIn'>
      <div className='row no-gutters'>
        <div className='col-4'>
          <img
            className='card-img-top'
            src={imagePath}
            alt={productName}
          />
        </div>
        <div className='col-8'>
          <div className='card-body'>
            <h5 className='card-title'>{productName}</h5>
            
            <div className='card-text'>
              {productDescription} <br/>
              <small className='text-muted'>{productPublisher}</small>
            </div>
            <Link to={`/product/${id}`}>
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPublisher: PropTypes.string.isRequired,
  productCategory: PropTypes.string.isRequired,
};