import * as actionTypes from './actionTypes'

const initState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 }
    ],
    totalprice: 80,
    purchasable: false
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
                return {
                    ...state,
                    ingredients: ingredients,
                    totalprice: state.totalprice - ingredientsPrices[action.payload]
                }
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchasable: sum > 0,
            }
        default:
            return state;
    }
}