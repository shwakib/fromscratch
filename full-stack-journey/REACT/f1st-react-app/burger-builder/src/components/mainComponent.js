import React, { Component } from "react";
import Header from "./Header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";
import Orders from "./Orders/orders";
import Checkout from "./Orders/Checkout/checkout";
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from "./Auth/Auth";
import { connect } from "react-redux";
import { authCheck } from "../redux/authActionCreators";
import Logout from "./Auth/logout";

const mapStateToprops = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}

class mainComponent extends Component {
    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
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
                    <Route path="/logout" element={<Logout />} />
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
}

export default connect(mapStateToprops, mapDispatchToProps)(mainComponent);