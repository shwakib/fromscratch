import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const PrivateRoute = ({ children }) => {
    const authed = isAuthenticated();

    return authed ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;