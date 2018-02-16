import ActionTypes from './../constants/actionTypes';
import config from './../config';
import axios from 'axios';

const API_URL = config.API_URL;
const TEMPLATES_API_URL = API_URL + '/templates';

export function getTemplates() {
    return {
        type: ActionTypes.GET_TEMPLATES,
        payload: axios.get(TEMPLATES_API_URL).then(res => res.data)
    }
}

export function getTemplatesAsPosts() {
    return {
        type: ActionTypes.GET_POSTS,
        payload: axios.get(TEMPLATES_API_URL)
            .then(res => res.data)
            .then(templates => {
                return templates.map(t => {
                    return {
                        _id: t._id,
                        title: t.title,
                        code: t.template,
                        template: {
                            _id: -1,
                            title: "Template of template =)",
                            template: "<div class='column'><div class='template-title'></div><div class='template-code'></div></div>"
                        }
                    }
                })
            })
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