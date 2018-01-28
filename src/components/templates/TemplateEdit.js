import React, { Component } from 'react';
import TemplateActions from './../../actions/templateActions';

import Title from '../posts/elements/Title';
import Code from './../posts/elements/Code';

export default class TemplateEdit extends Component {

    constructor(props) {

        super(props);

        this.state = {
            template: this.props.template,
        };

        this.saveTemplate = this.saveTemplate.bind(this);
        this.cancelTemplate = this.cancelTemplate.bind(this);
        this.deleteTemplate = this.deleteTemplate.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);

    }

    saveTemplate() {
        TemplateActions.saveTemplate(this.state.template);
        this.props.isEdit();
    }

    cancelTemplate() {
        this.props.isEdit();
    }

    deleteTemplate() {

    }

    handleChangeTitle(event) {
        let template = this.state.template;
        template.title =  event.target.value;
        this.setState({template: template});
    }

    handleChangeCode(event) {
        let template = this.state.template;
        template.template =  event.target.value;
        this.setState({template: template});
    }

    render() {
        return (
            <div className="block edit">

                <Title title={this.state.template.title} onChange={this.handleChangeTitle} />

                <Code code={this.state.template.template} onChange={this.handleChangeCode} />

                <div className="buttons">
                    <div className="button" onClick={this.saveTemplate}>Save</div>
                    <div className="button" onClick={this.cancelTemplate}>Cancel</div>
                </div>

            </div>
        );
    }
}