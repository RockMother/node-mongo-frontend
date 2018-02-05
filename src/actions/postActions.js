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

    savePost(post) {
        //Temp solution for update
        let actionType = ActionTypes.CREATE_POST;
        const formData = new FormData();
        if (post._id){ 
            actionType = ActionTypes.UPDATE_POST;
            formData.append("_id", post._id);
        }
        formData.append("title", post.title);
        formData.append("texts[]", JSON.stringify(post.texts));
        formData.append("categories[]", JSON.stringify(post.categories));
        formData.append("images", post.image);

        return axios.post(POSTS_API_URL, formData).then(res => {
            Dispatcher.dispatch({
                actionType: actionType,
                post: res.data
            });
        }).catch(err => {

            console.log(err)
        });
    }

    deletePost(id) {
        return axios.delete(`${POSTS_API_URL}/${id}`).then(res => {
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_POST,
                postId: id
            });
        });
    }
}

export default new PostActions();