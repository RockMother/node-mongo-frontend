import ActionTypes from './../constants/actionTypes';
import Dispatcher from "./../dispatcher/appDispatcher";
import TemplatesService from './../services/templatesApiService';

class TemplatesActions {
    constructor() {
        this.templatesService = new TemplatesService();
    }

    getTemplates(){
        this.templatesService.getTemplates().then(res => {
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