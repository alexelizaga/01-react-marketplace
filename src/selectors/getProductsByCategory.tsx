import { products } from '../data/products';

export const getProductsByCategory = ( productCategory: string ) => {

  const validCategories = ['Libros', 'Electrónica'];
  if(  !validCategories.includes( productCategory ) ) {
    throw new Error( `${ productCategory } is not valid category` );
  }

  return products.filter( product => product.productCategory === productCategory );
}