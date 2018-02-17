import ActionTypes from './../constants/actionTypes';
import config from './../config';
import axios from 'axios';

const API_URL = config.API_URL;
const TEMPLATES_API_URL = API_URL + '/templates';

const templateAsPostTemplate = {
    _id: -1,
    title: "Template of template =)",
    template: "<div class='column'><div class='template-title'></div><div class='template-code'></div></div>"
};

function convertTemplateToPost(template) {
    return {
        _id: template._id,
        title: template.title,
        code: template.template,
        template: templateAsPostTemplate
    }
}

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
            .then(templates => templates.map(convertTemplateToPost))
    }
}

export function saveTemplateAsPost(post) {
    let method = "post";
    let actionType = ActionTypes.CREATE_POST;
    const template = {
        title: post.title,
        template: post.code
    };
    if (post._id) {
        template._id = post._id;
        method = "put";
        actionType = ActionTypes.UPDATE_POST;
    }
    return {
        type: actionType,
        payload: axios[method](TEMPLATES_API_URL ,template).then(res => convertTemplateToPost(res.data))
    }
}