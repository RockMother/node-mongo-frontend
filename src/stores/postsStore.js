import Dispatcher from './../dispatcher/appDispatcher';
import BaseStore from './baseStore';
import ActionTypes from './../constants/actionTypes';

class PostsStore extends BaseStore {

    constructor() {
        super();
        this.posts = [];
        Dispatcher.register((payload) => {
            switch (payload.actionType) {
                case ActionTypes.GET_POSTS:
                    this.posts = payload.posts;
                    this.emitChange();
                    break;
                default:
                    break;
            }
        });
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


