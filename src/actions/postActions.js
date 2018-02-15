import ActionTypes from './../constants/actionTypes';
import axios from 'axios';
import config from './../config';

const API_URL = config.API_URL;
const POSTS_API_URL = API_URL + '/posts';

export function getPosts(category) {
    return {
        type: ActionTypes.GET_POSTS,
        payload: axios.get(`${POSTS_API_URL}?category=${category}`).then(res => res.data )
    }
}

export function savePost(post) {
    let actionType = ActionTypes.CREATE_POST;
    let method = 'post';
    const formData = new FormData();
    if (post._id) {
        method = 'put';
        actionType = ActionTypes.UPDATE_POST;
        formData.append("_id", post._id);
    }
    formData.append("title", post.title);
    formData.append("template", JSON.stringify(post.template));
    formData.append('images[]', JSON.stringify(post.images));
    formData.append("texts[]", JSON.stringify(post.texts));
    formData.append("categories[]", JSON.stringify(post.categories));
    if (post.newImages) {
        post.newImages.forEach((newImage, index) => {
            formData.append('newImage' + index, newImage);
        });
    }
    return {
        type: actionType,
        payload: axios[method](POSTS_API_URL, formData).then(res => res.data)
    };
}

export function deletePost(id) {
    return {
        type: ActionTypes.DELETE_POST,
        payload: axios.delete(`${POSTS_API_URL}/${id}`).then(() => id)
    }
}
