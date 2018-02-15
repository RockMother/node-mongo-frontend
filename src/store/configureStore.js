import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise';


export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(promiseMiddleware)
    );
}