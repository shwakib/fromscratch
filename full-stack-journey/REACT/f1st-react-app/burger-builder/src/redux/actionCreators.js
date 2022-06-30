import * as actionTypes from './actionTypes';

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