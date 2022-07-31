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
    const queryParams = '&orderBy="userID"&equalTo="' + userID + '"';
    console.log(queryParams);
    axios.get('https://burger-builder-9e98c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json?auth=' + token + queryParams)
        .then(response => {
            // console.log(response);
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFailed());
        })
}