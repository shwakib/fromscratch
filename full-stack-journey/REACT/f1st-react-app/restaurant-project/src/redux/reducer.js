import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'

const initialState = {
    dishes: DISHES,
    comments: COMMENTS
}

export const reducer = (state = initialState, action) => {
    return state;
}