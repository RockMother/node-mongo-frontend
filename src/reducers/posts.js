import initialState from "./initialState";
import ActionTypes from './../constants/actionTypes';

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return action.payload;
        case ActionTypes.CREATE_POST:
            return [
                ...state,
                Object.assign({}, action.post)
            ];
        case ActionTypes.UPDATE_POST:
            return [
                ...state.filter(p => p._id !== action.post._id),
                Object.assign({}, action.post)
            ];
        case ActionTypes.DELETE_POST:
            return [
                ...state.filter(p => p._id !== action.postId)
            ];
        default:
            return state;
    }
}