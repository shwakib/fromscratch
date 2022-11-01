import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Register from './user/Register';
import Login from './user/Login';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default Main;