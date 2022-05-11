import { products } from '../data/products';

export const getProductsByName = (name = '') => {
  
  if (name === '') return [];
  name = name.toLocaleLowerCase();

  return products.filter((product) =>
    product.productName.toLocaleLowerCase().includes(name)
  );
};