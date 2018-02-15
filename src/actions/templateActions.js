import ActionTypes from './../constants/actionTypes';
import config from './../config';
import axios from 'axios';

const API_URL = config.API_URL;
const TEMPLATES_API_URL = API_URL + '/templates';

export function getTemplates() {
    return dispatch => {
        return axios.get(TEMPLATES_API_URL).then(res => {
            dispatch({
                type: ActionTypes.GET_TEMPLATES,
                templates: res.data
            });
        }).catch(console.error);
    }
}

export function saveTemplate(template) {
    return dispatch => {
        return axios.post(template).then(res => {
            dispatch({
                type: ActionTypes.UPDATE_TEMPLATE,
                template: res.data
            })
        }).catch(console.error);
    }
}