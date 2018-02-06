import Dispatcher from './../dispatcher/appDispatcher';
import BaseStore from './baseStore';
import ActionTypes from './../constants/actionTypes';

class PostsStore extends BaseStore {

    constructor() {
        super();
        this.posts = [];
        const callback = (function(payload) {
            switch (payload.actionType) {
                case ActionTypes.GET_POSTS:
                    this.posts = payload.posts;
                    this.emitChange();
                    break;
                case ActionTypes.CREATE_POST:
                    this.posts.unshift(payload.post);
                    this.emitChange();
                    break;
                case ActionTypes.UPDATE_POST:
                    const index = this.posts.findIndex(p => p._id === payload.post._id);
                    if (index >= 0) {
                        this.posts[index] = payload.post;
                        this.emitChange();
                    }
                    break;
                case ActionTypes.DELETE_POST:
                    this.posts.splice(this.posts.find(p => p._id === payload.postId), 1);
                    this.emitChange();
                    break;
                default:
                    break;
            }
        }).bind(this);
        Dispatcher.register(callback);
    }

    getPosts() {
        return this.posts;
    }

    // getCategoryPosts(path) {

    //     // console.log(path);

    //     path = path.replace("/", "").toLowerCase();

    //     if (path === "")
    //         path = "art";

    //     return this.posts.filter(function (post) {
    //         return (post.categories && post.categories.length > 0 && post.categories[0] && post.categories[0].name.toLowerCase() === path);
    //     });
    // }
}
export default new PostsStore();


