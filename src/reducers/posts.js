import initialState from "./initialState";
import ActionTypes from './../constants/actionTypes';

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return action.payload;
        case ActionTypes.CREATE_POST:
            return [
                Object.assign({}, action.payload),
                ...state
            ];
        case ActionTypes.UPDATE_POST:
            return [
                ...state.map(p => p._id === action.payload._id? action.payload: p)
            ];
        case ActionTypes.DELETE_POST:
            return [
                ...state.filter(p => p._id !== action.payload)
            ];
        default:
            return state;
    }
}