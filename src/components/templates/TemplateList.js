import React, { Component } from 'react';
import Template from './Template';


export default class TemplateList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.templates.map(template => {
                return <div className="row no-gutters justify-content-md-center">
                    <Template
                        key={template._id} 
                        title={template.title}
                        template={template.template}
                        id={template._id}>
                    </Template>
                </div>
            })
        );
    }
}
