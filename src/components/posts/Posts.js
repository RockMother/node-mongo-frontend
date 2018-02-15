import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import * as postActions from '../../actions/postActions';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.props.postActions.getPosts(this.props.category);
        this.state = {
            root: true,
            newPost: {
                title: "",
                texts: [],
                categories: [{
                    name: this.props.category
                }],
                images: []
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            this.props.postActions.getPosts(this.props.category);
        }
    }

    render() {
        return (
            <div className="list">
                {this.state.root ? <Post key="new" post={this.state.newPost} /> : ''}
                {this.props.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
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
        postActions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);