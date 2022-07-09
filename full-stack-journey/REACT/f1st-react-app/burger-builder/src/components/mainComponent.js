import React from "react";
import Header from "./Header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";
import Orders from "./Orders/orders";
import Checkout from "./Orders/Checkout/checkout";
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from "./Auth/Auth";
import { connect } from "react-redux";

const mapStateToprops = state => {
    return {
        token: state.token
    }
}

const mainComponent = props => {
    let routes = null;
    if (props.token === null) {
        routes = (
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        )
    }
    else {
        routes = (
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/burgerbuilder" element={<BurgerBuilder />} />
                <Route
                    path="*"
                    element={<Navigate to="/burgerbuilder" replace />}
                />
            </Routes>
        )
    }
    return (
        <div>
            <Header />
            <div className="container">
                {routes}
            </div>
        </div>
    )
}

export default connect(mapStateToprops)(mainComponent);