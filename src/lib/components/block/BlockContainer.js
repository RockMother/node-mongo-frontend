import React, { Component } from 'react'
import Buttons from '../buttons/Buttons';

import Block from './Block';
import BlockSettings from './BlockSettings';
import TemplateSelector from './../templateSelector/TemplateSelector';

import templateParserService from './../../services/templateParserService';

import { bindToThis } from './../../utils/utils';
import { getElementDescriptors } from '../../services/blockEementsFactory';

class BlockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);

        bindToThis(this, this.modelChanged,
            this.onTemplateClicked,
            this.onTemplateSelected,
            this.cancelClicked,
            this.setEdit,
            this.deleteClicked,
            this.saveClicked);
    }

    getInitialState(props) {
        return {
            template: props.template,
            model: Object.assign({}, this.props.model),
            showTemplateSelector: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    modelChanged() {
        this.setState({ model: Object.assign({}, this.state.model) });
    }

    cancelClicked() {
        this.setState(this.getInitialState(this.props));
        this.setState({ isEdit: false });
    }

    deleteClicked() {
        this.props.deleteClicked();
    }

    saveClicked() {
        const { model, template } = this.state;
        this.props.saveClicked(model, template);
        this.setState({ isEdit: false });
    }

    setEdit() {
        this.setState({ isEdit: true });
    }

    onTemplateClicked() {
        this.setState({ showTemplateSelector: !this.state.showTemplateSelector });
    }

    onTemplateSelected(template) {
        const { model } = this.state;
        getElementDescriptors().forEach(e => {
            const array = model[e.modelName] || [];
            const elementsCount = templateParserService.getElementsCount(template, e);
            if (array.length < elementsCount) {
                model[e.modelName] = new Array(templateParserService.getElementsCount(template, e));
                for (let i = 0; i < elementsCount; i++) {
                    if (array.length > i && array[i]) {
                        model[e.modelName][i] = array[i];
                    } else {
                        model[e.modelName][i] = null;
                    }
                }
            }
        });
        this.setState({ template, model });
    }

    render() {
        const { isEdit, model, template, showTemplateSelector } = this.state;
        const blockClassName = `block-container ${isEdit ? 'edit' : model._id ? '' : 'new'}`;
        return (
            <div className={blockClassName}>
                <div className="block">
                    <Block onClick={this.setEdit}
                        model={model}
                        isEdit={isEdit}
                        template={template}
                        modelChanged={this.modelChanged}>
                    </Block>
                    {
                        isEdit && 
                        <BlockSettings>
                        </BlockSettings>
                    }
                </div>
                {
                    isEdit &&
                    <Buttons onTemplateClicked={!this.props.hideTemplatesButton && this.onTemplateClicked}
                        onSaveClicked={this.saveClicked}
                        onDeleteClicked={!this.props.hideDeleteButton && this.deleteClicked}
                        onCancelClicked={this.cancelClicked} />
                }
                {
                    isEdit && showTemplateSelector && <TemplateSelector
                        templates={this.props.templates}
                        selectedTemplate={this.state.template}
                        onTemplateSelected={this.onTemplateSelected} />
                }
            </div>
        );
    }
}

export default BlockContainer;