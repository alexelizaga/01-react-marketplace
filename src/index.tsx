import React from 'react';
import ReactDOM from 'react-dom/client';

import MarketplaceApp from './MarketplaceApp';
import reportWebVitals from './reportWebVitals';

import './styles/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MarketplaceApp />
  </React.StrictMode>
);

reportWebVitals();
