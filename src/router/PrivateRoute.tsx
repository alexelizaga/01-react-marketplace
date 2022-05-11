import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';

export const PrivateRoute = ({ children }: any) => {

  const { user } = useContext(AuthContext);

  const location = useLocation();

  localStorage.setItem('lastPath', location.pathname + location.search );

  return user.logged
    ? children
    : <Navigate to={'/login'} />
}