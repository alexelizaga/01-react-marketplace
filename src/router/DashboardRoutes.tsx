import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { ProductDetailsScreen } from '../components/product/ProductDetailsScreen';
import { ShoppingcardScreen } from '../components/shoppingcard/ShoppingcardScreen';

export const DashboardRoutes = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='shoppingcard' element={<ShoppingcardScreen />} />
        <Route path="product/:productId" element={<ProductDetailsScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  )
}