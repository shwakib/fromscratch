import { Link, useLocation } from "react-router-dom";

const isActive = (pathname, path) => {
    if (pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: 'grey' }
    }
}

const Menu = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to='/' style={isActive(location.pathname, '/')}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login' style={isActive(location.pathname, '/login')}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/register' style={isActive(location.pathname, '/register')}>Register</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Menu;