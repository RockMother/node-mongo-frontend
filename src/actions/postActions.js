import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from './../constants/actionTypes';
import axios from 'axios';
import config from './../config';

 const API_URL = config.API_URL;

class PostActions {

    getAllPosts() {
        axios.get(API_URL).then(res => {
            console.log(res)
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_POSTS,
                posts: res.data
            });
        });
    }

    createPost(post) {
        const formData = new FormData();
        formData.append("_id", post._id);
        formData.append("title", post.title);
        formData.append("texts[]", post.texts);
        formData.append("categories[]", post.categories);
        formData.append("images", post.images);
        axios.post(API_URL, formData).then(res => {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_POST,
                post: res.data
            });
        });
    }

    deletePost(post) {
        axios.delete(API_URL + "/" + post._id).then(res => {
            console.log(res)
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_POST,
                postId: post._id
            });
        });
    }
}

export default new PostActions();