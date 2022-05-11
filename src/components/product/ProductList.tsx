import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getProductsByCategory } from '../../selectors/getProductsByCategory';

export const ProductList = ({ category }: any) => {
  const products = useMemo(() => getProductsByCategory(category), [category]);

  return (
    <>
      <h1 className='mt-3'>{category}</h1>
      <div
        className="row row-cols-2 row-cols-lg-3 align-items-stretch mt-4"
      >
        {
          products.map( product => (
            <div key={product.id} className='mb-2'>
              <HeroCard {...product} />
            </div>
          ))
        }
      </div>
    </>
  );
};
