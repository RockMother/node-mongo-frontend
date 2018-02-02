import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from './../constants/actionTypes';
import axios from 'axios';
import config from './../config';

 const API_URL = config.API_URL;
 const POSTS_API_URL = API_URL + '/posts';

class PostActions {
    dispatchPosts(posts) {
        Dispatcher.dispatch({
            actionType: ActionTypes.GET_POSTS,
            posts: posts
        });
    }

    getPosts(category) {
        axios.get(`${POSTS_API_URL}?category=${category}`).then(res => {
            this.dispatchPosts(res.data);
        });
    }

    getAllPosts() {
        axios.get(POSTS_API_URL).then(res => {
            this.dispatchPosts(res.data);
        });
    }

    savePost(post, isEdit) {

        const formData = new FormData();
        formData.append("_id", post._id);
        formData.append("title", post.title);
        formData.append("texts[]", JSON.stringify(post.texts));
        formData.append("categories[]", JSON.stringify(post.categories));
        formData.append("images", post.image);

        axios.post(POSTS_API_URL, formData).then(res => {

            isEdit();

            Dispatcher.dispatch({

                actionType: ActionTypes.CREATE_POST,
                post: res.data
            });

        }).catch(err => {

            console.log(err)
        });
    }

    deletePost(post) {
        axios.delete(POSTS_API_URL + "/" + post._id).then(res => {
            console.log(res)
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_POST,
                postId: post._id
            });
        });
    }
}

export default new PostActions();