import React, { Component } from 'react';

import Code from './../posts/elements/Code';

export default class TemplateView extends Component {

    constructor(props) {

        super(props);

        this.state = {
            template: props.template
        }

        this.editTemplate = this.editTemplate.bind(this);
    }

    editTemplate() {
        this.props.isEdit();
    }

    render() {
        return (

            <div className="block" onClick={this.editTemplate}>

                <div className="text">

                    <div>{this.props.template.title}</div>

                </div>

                <Code code={this.props.template.template} />

            </div>
        );
    }
}