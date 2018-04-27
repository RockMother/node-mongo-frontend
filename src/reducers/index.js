import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import token from './token';

export default combineReducers({ posts, categories, token });