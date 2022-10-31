import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Main;