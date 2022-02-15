import * as ActionTypes from './actionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}
            //Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places
            //where zero or more arguments (for function calls) or elements (for array literals) are expected

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};