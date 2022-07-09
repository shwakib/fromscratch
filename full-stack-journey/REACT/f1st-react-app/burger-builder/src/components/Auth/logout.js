import React, { Component } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/authActionCreators";

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logOut();
    }
    render() {
        return (
            <div>
                <Navigate to="/" replace={true} />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);