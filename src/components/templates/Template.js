import React, { Component } from 'react';
import TemplateView from './TemplateView';
import TemplateEdit from './TemplateEdit';
import templateActions from './../../actions/templateActions';

export default class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.editTemplate = this.editTemplate.bind(this);
        this.saveTemplate = this.saveTemplate.bind(this);
    }

    editTemplate() {
        this.setState({
            isEdit: true
        });
    }

    saveTemplate(template) {
        this.setState({
            isEdit: false
        });
        templateActions.saveTemplate(template);
    }

    render() {
        const child = this.state.isEdit ?
            <TemplateEdit
                id={this.props.id}
                title={this.props.title}
                template={this.props.template}
                saveTemplateClicked={this.saveTemplate}>
            </TemplateEdit> :
            <TemplateView
                id={this.props.id}
                title={this.props.title}
                template={this.props.template}
                editTemplateClicked={this.editTemplate}>
            </TemplateView>
        return (
            child
        );
    }
}