import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    dishes: [],
    favouriteDish: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {
                ...state,
                dishes: action.payload
            }
        case actionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                favouriteDish: state.favouriteDish.concat(action.payload)
            }
        case actionTypes.REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favouriteDish: state.favouriteDish.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}