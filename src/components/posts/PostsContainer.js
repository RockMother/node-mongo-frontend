import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/postActions';
import * as templatesActions from '../../actions/templateActions';

import Posts from './Posts';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.props.postActions.getPosts(this.props.category);
        this.props.templatesActions.getTemplates();
    }
    

    render() {
        const saveAction = this.props.postActions.savePost;
        const deleteAction = this.props.postActions.deletePost;
        return (
            <Posts data={this.props.posts}
                templates={this.props.templates}
                showNew = {this.props.showNew}
                category={this.props.category}
                save={saveAction}
                delete={deleteAction}>
            </Posts>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts,
        category: ownProps.category,
        showNew: state.token,
        templates: state.templates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch),
        templatesActions: bindActionCreators(templatesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);