import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/postActions';
import * as templatesActions from './../../actions/templateActions';

import Posts from './Posts';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: this.isTemplates(props.category)
        }
        if (this.isTemplates(props.category)) {
            this.props.templatesActions.getTemplatesAsPosts();
        } else {
            this.props.postActions.getPosts(this.props.category);
        }
    }

    isTemplates(category) {
        return category.toLowerCase() === 'templates';
    }

    componentWillReceiveProps(newProps) {
        this.setState({ templates: this.isTemplates(newProps.category) });

    }

    render() {
        const saveAction = this.state.templates ? this.props.templatesActions.saveTemplate : this.props.postActions.savePost;
        const deleteAction = this.state.templates ? this.props.templatesActions.deleteTemplate : this.props.postActions.deletePost;
        return (
            <Posts posts={this.props.posts} savePost={saveAction} deletePost={deleteAction}></Posts>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts,
        category: ownProps.category
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch),
        templatesActions: bindActionCreators(templatesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);