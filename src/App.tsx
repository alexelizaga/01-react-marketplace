import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { firebaseConfig } from './firebase-config';
import { HomeScreen } from './screens/HomeScreen';
import { ProductDetailsScreen } from './screens/ProductDetailsScreen';

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/*" element={<ProductDetailsScreen />} />
        </Routes>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
