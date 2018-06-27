import React, { Component } from 'react';

import config from '../../config';

import { bindToThis } from '../../utils/utils';
import BlockContainer from '../block/BlockContainer';

export default class Templates extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);
        bindToThis(this, this.deleteClicked, this.saveClicked);
    }

    getInitialState(props) {
        return {
            root: true,
            newTemplate: {
                title: [],
                codes: []
            }
        }
    }

    deleteClicked(id) {
        this.props.delete(id);
    }

    saveClicked(originalTemplate, blockModel) {
        this.props.save(convertToTemplate(blockModel, originalTemplate));
    }

    render() {
        return (
            <div className="list">
                {this.props.showNewPost &&
                    <BlockContainer key="new"
                        model={convertTemplateToBlockModel(this.state.newTemplate)}
                        saveClicked={ this.saveClicked.bind(this, this.state.newTemplate) }
                        template={this.props.newTemplate}
                        hideDeleteButton={true} />}
                {this.props.templates.length > 0 && this.props.templates.map(template => <BlockContainer key={template._id}
                    model={convertTemplateToBlockModel(template)}
                    template={this.props.newTemplate}
                    deleteClicked={ this.deleteClicked.bind(this, template._id) }
                    saveClicked={ this.saveClicked.bind(this, template) }
                />)}
            </div>
        );
    }
}

function convertToTemplate(blockModel, originalTemplate) {
    return {
        _id: originalTemplate._id,
        titles: blockModel.titles.map((t, index) => {
            return {
                title: t,
                orderInTemplate: index
            }            
        }),
        template: blockModel.codes[0]
    }
}

function convertTemplateToBlockModel(template) {
    return {
        titles: [{ title: template.title} ],
        codes: [template.template],
    }
}

