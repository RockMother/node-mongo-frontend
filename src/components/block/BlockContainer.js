import React, {Component} from 'react'
import Buttons from '../buttons/Buttons';

import Block from './Block'
import TemplateSelector from './../templateSelector/TemplateSelector';

import { bindToThis } from './../../utils/utils';
import { getElementDescriptors } from '../../services/blockEementsFactory';
import templateParserService from '../../services/templateParserService';

class BlockContainer extends Component {
    constructor(props){
        super(props);
        
        this.state = this.getInitialState(props);

        bindToThis(this, this.setEdit, 
                        this.modelChanged,
                        this.onTemplateClicked,
                        this.onTemplateSelected,
                        this.cancelClicked,
                        this.deleteClicked,
                        this.saveClicked);
    }

    getInitialState(props) {
        return {
            isEdit: false,
            template: props.template,
            model: Object.assign({}, this.props.model),
            showTemplateSelector: false
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    modelChanged() {
        this.setState({model:  Object.assign({}, this.state.model) });
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
    }

    setEdit() {
        if (!this.state.isEdit)
            this.setState({isEdit: true});
    }

    onTemplateClicked() {
        this.setState({ showTemplateSelector: !this.state.showTemplateSelector });
    }

    onTemplateSelected(template){
        const { model } = this.state;
        getElementDescriptors().forEach(e => {
            const array = model[e.modelName] || [];
            const elementsCount = templateParserService.getElementsCount(template, e);
            if (array.length < elementsCount) {
                model[e.modelName] = new Array(templateParserService.getElementsCount(template, e));
                for(let i = 0; i< elementsCount; i++) {
                    if (array.length > i && array[i]) {
                        model[e.modelName][i] = array[i];
                    } else {
                        model[e.modelName][i] = null;
                    }
                }
            }
        });
        this.setState({template, model});
    }

    render() {
        const { isEdit, model, template, showTemplateSelector } = this.state;
        const blockClassName = `block ${isEdit ? 'edit' : model._id ? '' : 'new'}`;
        return (
            <div className={blockClassName}>
                <Block onClick={this.setEdit}
                    model={model} 
                    template={template}
                    modelChanged={this.modelChanged}
                    isEdit={isEdit}>
                </Block>
                {
                    isEdit &&
                    <Buttons onTemplateClicked={!this.props.hideTemplatesButton && this.onTemplateClicked}
                        onSaveClicked={this.saveClicked}
                        onDeleteClicked={!this.props.hideDeleteButton && this.deleteClicked}
                        onCancelClicked={this.cancelClicked}/>
                }
                {
                    isEdit && showTemplateSelector && <TemplateSelector
                        selectedTemplate={this.state.template}
                        onTemplateSelected={this.onTemplateSelected} />
                }
            </div>
        );
    }
}

export default BlockContainer;