import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from './../constants/actionTypes';
import axios from 'axios';

class PostActions {
    getAllPosts() {
        const API_URL = 'https://cms-dot.herokuapp.com/api/posts';
        axios.get(API_URL).then(res => {
            console.log(res)
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_POSTS,
                posts: res.data
            });
        });
    }
}

export default new PostActions();