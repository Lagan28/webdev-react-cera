import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            //here, concat function pushes the new element into the array therefore not mutating the state, rather just adding to it and returning the new state
            return state.concat(comment);
        default:
            return state;
    }
};