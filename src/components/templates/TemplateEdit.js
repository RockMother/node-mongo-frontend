import React, { Component } from 'react';
import TemplateActions from './../../actions/templateActions';

import Code from './../posts/elements/Code';

export default class TemplateEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: this.props.template,
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.templateChanged = this.templateChanged.bind(this);
        this.saveTemplate = this.saveTemplate.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    saveTemplate() {
        TemplateActions.saveTemplate(this.state.template);
        this.props.template.editTemplateClicked();
    }

    cancelEdit() {
        this.props.template.editTemplateClicked();
    }

    titleChanged(event) {
        this.setState({ title: event.target.value });
    }

    templateChanged(updatedTemplate) {
        this.setState({ template: updatedTemplate });
    }

    render() {
        return (
            <div className="block edit">

                <div className="text">

                    <input type="text"
                           name="title"
                           placeholder="Some title here please"
                           value={this.props.template.title}
                           onChange={this.titleChanged} />

                </div>

                <Code code={this.state.template.template} onChange={this.templateChanged} />

                <div className="buttons">
                    <div className="button" onClick={this.saveTemplate}>Save</div>
                    <div className="button" onClick={this.cancelEdit}>Cancel</div>
                </div>

            </div>
        );
    }
}