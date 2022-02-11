//importing all the actions being imported from the actionTypes file
import * as ActionTypes from './actionTypes';

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

