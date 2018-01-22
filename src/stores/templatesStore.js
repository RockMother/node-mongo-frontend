import BaseStore from './baseStore';
import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

class TemplatesStore extends BaseStore {
    constructor() {
        super();
        this.templates = [];
        Dispatcher.register((payload) => {
            switch (payload.actionType) {
                case ActionTypes.GET_TEMPLATES:
                    this.templates = payload.templates;
                    console.log(this.templates);
                    this.emitChange();
                    break;
            }
        });
    }

    getTemplates() {
        return this.templates;
    }
} 

export default new TemplatesStore();