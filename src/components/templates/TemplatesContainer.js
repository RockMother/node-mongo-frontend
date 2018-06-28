import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Templates from './Templates';

import * as templatesActions from './../../actions/templateActions';

class TemplatesContainer extends Component {
    constructor(props) {
        super(props);
        this.props.templatesActions.getTemplates();
    }

    render() {
        const templates = this.props.templates.map(t => {
            return Object.assign({}, t, {template: templatesActions.newTemplate});
        });
        return (
            <Templates data={templates}
                showNew = {this.props.showNewTemplate}
                newEntityTemplate={templatesActions.newTemplate}
                save={this.props.templatesActions.saveTemplate}
                delete={this.props.templatesActions.deleteTemplate}>
            </Templates>
        );
    }
}

function mapStateToProps(state) {
    return {
        templates: state.templates,
        showNewTemplate: state.token,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        templatesActions: bindActionCreators(templatesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesContainer);