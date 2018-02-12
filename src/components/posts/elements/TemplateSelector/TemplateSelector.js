import React, { Component } from 'react';
import templatesStore from './../../../../stores/templatesStore';
import templateActions from './../../../../actions/templateActions';
import TemplateButton from './TemplateButton';
import './TemplateButton.css';

export default class TemplateSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: templatesStore.getTemplates(),
        }

        this.templateSelected = this.templateSelected.bind(this);
    }

    componentDidMount() {
        templateActions.getTemplates();
        templatesStore.addChangeListener(() => this.onChange());
    }

    componentWillUnmount() {
        templatesStore.removeChangeListener(() => this.onChange());
    }

    onChange() {
        this.setState({ templates: templatesStore.getTemplates() });
    }

    templateSelected(template) {
        this.props.onTemplateSelected(template);
    }

    render() {
        return (
            <div className="template-selector">
                {this.state.templates.length > 0 ?
                    this.state.templates.map((template, index) => {

                        return <TemplateButton
                            template={template}
                            selected={template === this.props.selectedTemplate}
                            key={index}
                            clicked={this.templateSelected}>
                        </TemplateButton>

                    }) : ''}
            </div>
        );
    }
}
