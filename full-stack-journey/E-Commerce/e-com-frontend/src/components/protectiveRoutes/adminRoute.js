import { Navigate } from 'react-router-dom';
import { isAuthenticated, userInfo } from '../../utils/auth';

const AdminRoute = ({ children }) => {
    const adminAuthed = isAuthenticated() && userInfo().role === 'admin';

    return adminAuthed ? children : <Navigate to="/" replace />;
}

export default AdminRoute;