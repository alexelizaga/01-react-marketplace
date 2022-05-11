import { useEffect, useReducer } from 'react';
import { FirebaseAppProvider } from 'reactfire';

import './App.css';
import { firebaseConfig } from './firebase-config';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './router/AppRouter';


const init = () => {
  return JSON.parse( localStorage.getItem('user')! ) || { logged: false }
};

function App() {
  const [user, dispatch] = useReducer( authReducer, {}, init );

  useEffect(() => {
    if ( !user ) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ]);

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthContext.Provider value={{
        user,
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
    </FirebaseAppProvider>
  );
}

export default App;
