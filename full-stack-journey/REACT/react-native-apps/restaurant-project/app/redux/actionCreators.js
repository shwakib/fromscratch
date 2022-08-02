import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://react-native-restaurant-420-default-rtdb.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}

export const addFavouriteDish = dish => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish
    }
}

export const removeFavouriteDish = dish => {
    return {
        type: actionTypes.REMOVE_FROM_FAVOURITES,
        payload: dish
    }
}