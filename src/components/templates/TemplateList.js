import React, { Component } from 'react';
import Template from './Template';

export default class TemplateList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.templates.map(template => <Template key={template._id} template={template} />)
        );
    }
}
