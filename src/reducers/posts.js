import initialState from "./initialState";
import ActionTypes from './../constants/actionTypes';

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return action.payload;
        case ActionTypes.CREATE_POST:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case ActionTypes.UPDATE_POST:
            return [
                ...state.filter(p => p._id !== action.payload._id),
                Object.assign({}, action.payload)
            ];
        case ActionTypes.DELETE_POST:
            return [
                ...state.filter(p => p._id !== action.payload)
            ];
        default:
            return state;
    }
}