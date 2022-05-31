import { useDispatch } from 'react-redux';

import { authLogin } from '../../actions/authActions';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch( authLogin('Alex', 'aaaabbbbccccdddd') );
  }

  return (
    <div className="container mt-5">
      <h1>Manual login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}