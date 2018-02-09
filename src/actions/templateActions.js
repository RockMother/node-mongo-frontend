import ActionTypes from './../constants/actionTypes';
import Dispatcher from "./../dispatcher/appDispatcher";
import config from './../config';
import axios from 'axios';

const API_URL = config.API_URL;
const TEMPLATES_API_URL = API_URL + '/templates';

class TemplatesActions {
    getTemplates(){
        axios.get(TEMPLATES_API_URL).then(res => {
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_TEMPLATES,
                templates: res.data
            });
        });
    }

    saveTemplate(template) {
        this.templatesService.saveTemplate(template).then(res => {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_TEMPLATE,
                template: res.data
            })
        });
    }

}

export default new TemplatesActions();