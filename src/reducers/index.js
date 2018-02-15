import { combineReducers } from 'redux';
import posts from './posts';
import templates from './templates';
import categories from './categories';

export default combineReducers({ posts, templates, categories });