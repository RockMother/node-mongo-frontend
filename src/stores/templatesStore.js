import BaseStore from './baseStore';
import Dispatcher from './../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

class TemplatesStore extends BaseStore {
    constructor() {
        super();
        this.templates = [];
        Dispatcher.register((function (payload) {
            switch (payload.actionType) {
                case ActionTypes.GET_TEMPLATES:
                    this.templates = payload.templates;
                    this.emitChange();
                    break;
                case ActionTypes.UPDATE_TEMPLATE:
                    for (let i = 0; i < this.templates.length; i++) {
                        if (this.templates[i]._id === payload.template._id) {
                            this.templates[i] = payload.template;
                            this.emitChange();
                            break
                        }
                    }
                    break;
                default:
                    break;
            }
        }).bind(this));
    }

    getTemplates() {
        return this.templates;
    }
}

export default new TemplatesStore();