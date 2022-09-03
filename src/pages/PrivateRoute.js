import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();
  return myUser ? children : Navigate('/login');
};
export default PrivateRoute;
