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
        return (
            <Templates templates={this.props.templates}
                showNewTemplate = {this.props.showNewTemplate}
                category={this.props.category}
                newTemplate={templatesActions.newTemplate}
                saveClicked={this.props.templatesActions.saveTemplateAsPost}
                deleteClicked={this.props.templatesActions.deleteTemplateAsPost}>
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