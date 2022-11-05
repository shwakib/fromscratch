import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut, isAuthenticated, userInfo } from '../utils/auth';

const isActive = (pathname, path) => {
    if (pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: 'grey' }
    }
}

const Menu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to='/' style={isActive(location.pathname, '/')}>Home</Link>
                </li>
                {!isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link" to='/login' style={isActive(location.pathname, '/login')}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/register' style={isActive(location.pathname, '/register')}>Register</Link>
                    </li>
                </>)}
                {isAuthenticated() && (<>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/${userInfo().role}/dashboard`} style={isActive(location.pathname, `/${userInfo().role}/dashboard`)}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" style={{ cursor: 'pointer', color: 'grey' }} onClick={() => {
                            signOut(() => {
                                navigate('/login');
                            });
                        }}>Log Out</span>
                    </li>
                </>)}
            </ul>
        </nav >
    )
}

export default Menu;