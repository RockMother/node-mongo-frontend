import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from './../constants/actionTypes';
import axios from 'axios';

// const API_URL = 'https://cms-dot.herokuapp.com/api/posts';
const API_URL = 'http://localhost:8000/api/posts';

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

    sendPost(post) {

        console.log(post)

        const formData = new FormData();

        formData.append("title", post.title);

        formData.append("texts[]", post.texts);

        formData.append("categories[]", post.categories);

        formData.append("images", post.images);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', API_URL);
        xhr.send(formData);
    }

    deletePost() {

    }
}

export default new PostActions();