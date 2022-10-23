import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addIngredients = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        payload: igtype
    }
}

export const removeIngredients = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        payload: igtype
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders
    }
}

export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED
    }
}

export const fetchOrders = (token, userID) => dispatch => {
    let url = process.env.REACT_APP_BACKEND_URL;
    axios.get(`${url}/order`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => {
            // console.log(response);
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}