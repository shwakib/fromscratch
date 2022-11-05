import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Register from './user/Register';
import Login from './user/Login';
import Dashboard from './user/Dashboard';
import AdminDashboard from './admin/adminDashboard';
import PrivateRoute from './protectiveRoutes/privateRoute';
import AdminRoute from './protectiveRoutes/adminRoute';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>}
                />
                <Route path="/admin/dashboard" element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>}
                />
                <Route path="/create/category" element={
                    <AdminRoute>
                        <CreateCategory />
                    </AdminRoute>}
                />
                <Route path="/create/product" element={
                    <AdminRoute>
                        <CreateProduct />
                    </AdminRoute>}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    )
}

export default Main;