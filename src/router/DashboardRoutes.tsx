import { Routes, Route } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { MyOrdersScreen } from '../components/my-orders/MyOrdersScreen';
import { OrderDetailsScreen } from '../components/my-orders/OrderDetailsScreen';
import { ProductDetailsScreen } from '../components/product/ProductDetailsScreen';
import { ShoppingcardScreen } from '../components/shoppingcard/ShoppingcardScreen';

export const DashboardRoutes = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='shoppingcard' element={<ShoppingcardScreen />} />
        <Route path="product/:productId" element={<ProductDetailsScreen />} />
        <Route path="marketplace" element={<HomeScreen />} />
        <Route path="marketplace_my_orders" element={<MyOrdersScreen />} />
        <Route path="order/:purchaseId" element={<OrderDetailsScreen />} />
        <Route path="" element={<HomeScreen />} />
      </Routes>
    </div>
  )
}