import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseURL } from './baseURL';

export const addComment = (dishID, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishID,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const commentLoading = () => ({
    type: actionTypes.COMMENTS_LOADING
})

export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());

        axios.get(baseURL + 'comments')
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)));
    }
}

export const loadDishes = (dishes) => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseURL + 'dishes')
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)));
    }
}