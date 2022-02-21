//import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actionTypes';

export const Comments = (state = {
    errMess: null,
    comments:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();

            //here, concat function pushes the new element into the array therefore not mutating the state, rather just adding to it and returning the new state
            return { ...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};