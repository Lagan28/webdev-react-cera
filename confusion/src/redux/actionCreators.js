//importing all the actions being imported from the actionTypes file
import * as ActionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    //returns a javascript object taking parameters as the actions being used
    type: ActionTypes.ADD_COMMENT,

    //naming convention for the property that holds the actual data in a Redux action object
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

