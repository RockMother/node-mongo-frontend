import initialState from './initialState';
import ActionTypes from '../constants/actionTypes';

export default (state = initialState.templates, action) => {
    switch (action.type) {
        case ActionTypes.GET_TEMPLATES:
            return action.payload;
        case ActionTypes.CREATE_TEMPLATE:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case ActionTypes.UPDATE_TEMPLATE:
            return [
                ...state.map(t => t._id === action.payload._id ? action.payload : t)
            ];
        case ActionTypes.DELETE_TEMPLATE:
            return [
                ...state.filter(t => t._id !== action.payload)
            ];
        default:
            return state;
    }
}
