import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { uiSetEntryPath } from '../actions/uiActions';
import { authLogin } from '../actions/authActions';

export const PrivateRoute = ({ children }: any) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { at: atParams = '' } = queryString.parse(location.search);
  const { at: atAuth } = useSelector((state: any) => state.auth); 

  if (atAuth === '' && atParams !== '') {
    dispatch( authLogin('Alex', atParams) );
    dispatch( uiSetEntryPath(location.pathname) );
  }

  return (atAuth !== '' || atParams !== '')
    ? children
    : <Navigate to={'/login'} />

}