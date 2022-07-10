import * as actionTypes from './actionTypes'

const initState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 }
    ],
    orders: [],
    orderLoading: true,
    orderError: false,
    totalprice: 80,
    purchasable: false,
    token: null,
    userID: null,
    authLoading: false,
    authFailedmsg: null
}

const ingredientsPrices = {
    salad: 20,
    cheese: 40,
    meat: 90
}

export const reducer = (state = initState, action) => {
    const ingredients = [...state.ingredients];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalprice: state.totalprice + ingredientsPrices[action.payload]
            }
        case actionTypes.REMOVE_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalprice: state.totalprice - ingredientsPrices[action.payload]
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchasable: sum > 0,
            }
        case actionTypes.RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    { type: 'salad', amount: 0 },
                    { type: 'cheese', amount: 0 },
                    { type: 'meat', amount: 0 }
                ],
                totalprice: 80,
                purchasable: false
            }
        case actionTypes.LOAD_ORDERS:
            let orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                orders: orders,
                orderLoading: false,
            }
        case actionTypes.ORDER_LOAD_FAILED:
            return {
                ...state,
                orderError: true,
                orderLoading: false
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userID: action.payload.userID
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userID: null,
                authFailedmsg: null
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedmsg: action.payload
            }
        default:
            return state;
    }
}