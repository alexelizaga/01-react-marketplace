import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';

import { store } from './store/store';
import { firebaseConfig } from './firebase-config';
import { AppRouter } from './router/AppRouter';

import './App.css';

function MarketplaceApp() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={ store }>
          <AppRouter />
      </Provider>
    </FirebaseAppProvider>
  );
}

export default MarketplaceApp;
