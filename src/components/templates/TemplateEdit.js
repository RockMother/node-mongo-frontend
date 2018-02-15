import React, { Component } from 'react';
import * as TemplateActions from './../../actions/templateActions';

import Title from '../posts/elements/Title';
import Code from './../posts/elements/Code';

export default class TemplateEdit extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: this.props.template.title,
            template: this.props.template.template
        };

        this.saveTemplate = this.saveTemplate.bind(this);
        this.cancelTemplate = this.cancelTemplate.bind(this);
        this.deleteTemplate = this.deleteTemplate.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);

    }

    saveTemplate() {
        TemplateActions.saveTemplate({
            _id: this.props.template._id,
            title: this.state.title,
            template: this.state.template
        });
        this.props.setEdit();
    }

    cancelTemplate() {
        this.props.setEdit();
    }

    deleteTemplate() {

    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeCode(event) {
        this.setState({template: event.target.value});
    }

    render() {
        return (
            <div className="block edit">

                <Title title={this.state.title} onChange={this.handleChangeTitle} />

                <Code code={this.state.template} onChange={this.handleChangeCode} />

                <div className="buttons">
                    <div className="button" onClick={this.saveTemplate}>Save</div>
                    <div className="button" onClick={this.cancelTemplate}>Cancel</div>
                </div>

            </div>
        );
    }
}