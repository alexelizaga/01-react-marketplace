import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }: any) => {

  const { logged } = useSelector<any, any>( state => state.auth );

  return logged
    ? <Navigate to={'/'} />
    : children;

}