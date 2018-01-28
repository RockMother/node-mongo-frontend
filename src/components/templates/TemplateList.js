import React, { Component } from 'react';
import Template from './Template';

export default class TemplateList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                <Template key="new" template={{_id: "new", title: "New", template: ""}} />
                {this.props.templates.map(template => <Template key={template._id} template={template} />)}
            </div>
        );
    }
}
