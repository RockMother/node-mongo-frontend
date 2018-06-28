import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../actions/postActions';

import Posts from './Posts';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.props.postActions.getPosts(this.props.category);
    }

    render() {
        const saveAction = this.props.postActions.savePost;
        const deleteAction = this.props.postActions.deletePost;
        return (
            <Posts data={this.props.posts}
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
        showNew: state.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);