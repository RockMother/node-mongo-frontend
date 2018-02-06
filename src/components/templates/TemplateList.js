import React, { Component } from 'react';
import Template from './Template';

export default class TemplateList extends Component {
    render() {
        return (
            <div className="list">
                <Template key="new" template={{_id: "new", title: "", template: ""}} />
                {this.props.templates.map(template => <Template key={template._id} template={template} />)}
            </div>
        );
    }
}
