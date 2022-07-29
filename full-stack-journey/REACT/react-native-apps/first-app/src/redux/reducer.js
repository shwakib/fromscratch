import * as actionTypes from './actionTypes'

const initState = {
    placeList: [],
    isAuth: false
}

export const rootreducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                placeList: state.placeList.concat(action.payload)
            }
        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                placeList: state.placeList.filter(place => place.key !== action.payload)
            }
        case actionTypes.SET_PLACES:
            return {
                ...state,
                placeList: action.payload
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}