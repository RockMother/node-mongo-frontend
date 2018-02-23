import React, { Component } from 'react';
import * as templateActions from './../../../../actions/templateActions';
import TemplateButton from './TemplateButton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TemplateSelector extends Component {
    constructor(props) {
        super(props);
        this.props.actions.getTemplates()
        this.templateSelected = this.templateSelected.bind(this);
    }

    templateSelected(template) {
        this.props.onTemplateSelected(template);
    }

    render() {
        return (
            <div className="template-selector">
                {this.props.templates.length > 0 ?
                    this.props.templates.map((template, index) => {
                        return <TemplateButton
                            template={template}
                            selected={template === this.props.selectedTemplate}
                            key={index}
                            onTemplateClicked={this.templateSelected}>
                        </TemplateButton>
                    }) : ''}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        templates: state.templates,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(templateActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSelector);
