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
            }
        });
    }

    getAllPosts() {
        return this.posts;
    }
}
export default new PostsStore();


