import * as actionTypes from './actionTypes';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logOut());
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            //Logout
            dispatch(logOut());
        }
        else {
            const userID = localStorage.getItem('userID');
            // console.log(expirationTime);
            // console.log(new Date());
            dispatch(authSuccess(token, userID));
        }
    }
}

export const auth = (email, password, mode) => dispatch => {
    dispatch(authLoading(true));
    const authData = {
        email: email,
        password: password
    }

    let Url = process.env.REACT_APP_BACKEND_URL;
    let authUrl = null;
    if (mode === "Sign Up") {
        authUrl = `${Url}/user`;
    }
    else {
        authUrl = `${Url}/user/auth`;
    }

    axios.post(authUrl, authData)
        .then(response => {
            dispatch(authLoading(false));
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userID', response.data.user._id);
            let decoded = jwt_decode(response.data.token);
            const expirationTime = new Date(decoded.exp * 1000);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(response.data.token, response.data.user._id))
        })
        .catch(err => {
            dispatch(authLoading(false));
            // console.log(err.response.data.error.message);
            dispatch(authFailed(err.response.data));
        })
}

export const authLoading = isLoading => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isLoading,
    }
}

export const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userID: userId
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userID');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}