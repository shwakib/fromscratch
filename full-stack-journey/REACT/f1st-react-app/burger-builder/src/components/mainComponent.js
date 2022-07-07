import React from "react";
import Header from "./Header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";
import Orders from "./Orders/orders";
import Checkout from "./Orders/Checkout/checkout";
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from "./Auth/Auth";

const mainComponent = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/burgerbuilder" element={<BurgerBuilder />} />
                    <Route path="/login" element={<Auth />} />
                    <Route
                        path="/"
                        element={<Navigate to="/burgerbuilder" replace />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default mainComponent;