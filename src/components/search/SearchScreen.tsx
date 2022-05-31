import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getProductsByName } from '../../selectors/getProductsByName';
import { HeroCard } from '../product/HeroCard';


export const SearchScreen = () => {

  const { shoppingcard } = useSelector<any, any>( state => state.shop );
  const navigate = useNavigate();
  const location = useLocation();

  const { q ='' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const productsFiltered = useMemo(() => getProductsByName(searchText), [searchText])

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <div className='row'>
        <form className='d-flex mt-4' onSubmit={handleSearch}>
          <button
            className="btn btn-light"
            onClick={() => navigate('/shoppingcard')}
          >
            { shoppingcard?.length || '0' }
          </button>

          <input
            type='text'
            placeholder='Qué estás buscando'
            className='form-control p-2'
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange={ handleInputChange }
          />

          <button
            className="btn btn-light"
            type="submit"
          >
            <i className="bi bi-cart"></i>
          </button>
          
        </form>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch mt-4">
        {
          (searchText !== '' && productsFiltered.length === 0)
            && <div className='alert alert-danger animate__animated animate__fadeIn'>
              No hay resultados para {searchText}
            </div>
        }
        {
          productsFiltered.map(product => (
            <div key={product.id} className='mb-2'>
              <HeroCard {...product} />
            </div>
          ))
        }
      </div> 
    </>
  )
}