import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Register from './user/Register';
import Login from './user/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './protectiveRoutes/privateRoute';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>}
                />
            </Routes>
        </div>
    )
}

export default Main;