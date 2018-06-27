import ActionTypes from './../constants/actionTypes';
import config from './../config';
import { makeRequest, makeSecurityRequest } from '../services/requestService';

const API_URL = config.API_URL;
const TEMPLATES_API_URL = API_URL + '/templates';

export const newTemplate = {
    _id: -1,
    title: "Template of template =)",
    template: "<div class='column'><div class='template-title'></div><div class='template-code'></div></div>"
};

export function getTemplates() {
    return {
        type: ActionTypes.GET_TEMPLATES,
        payload: makeRequest().get(TEMPLATES_API_URL).then(res => res.data)
    }
}

export function saveTemplate(template) {
    const request = makeSecurityRequest();
    let method = "post";
    let actionType = ActionTypes.CREATE_TEMPLATE;
    if (template._id) {
        method = "put";
        actionType = ActionTypes.UPDATE_TEMPLATE;
    }
    return {
        type: actionType,
        payload: request[method](TEMPLATES_API_URL ,template).then(res => res.data)
    }
}

export function deleteTemplate(id) {
    const request = makeSecurityRequest();
    return {
        type: ActionTypes.DELETE_TEMPLATE,
        payload: request.delete(`${TEMPLATES_API_URL}/${id}`).then(() => id)
    }
}