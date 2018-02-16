import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import * as postActions from '../../actions/postActions';
import * as templatesActions from './../../actions/templateActions';

class Posts extends Component {
    constructor(props) {
        super(props);
        if (this.props.category.toLowerCase() === 'templates')
            this.props.templatesActions.getTemplatesAsPosts();
        else 
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

        this.deletePost = this.deletePost.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            this.props.postActions.getPosts(this.props.category);
        }
    }

    deletePost(id){
        this.props.postActions.deletePost(id);
    }

    savePost(post) {
        this.props.postActions.savePost(post);
    }

    render() {
        return (
            <div className="list">
                {this.state.root ? <Post key="new" post={this.state.newPost} 
                savePostClicked={this.savePost}
                /> : ''}
                {this.props.posts.map(post => <Post key={post._id} 
                post={post} 
                deletePostClicked={this.deletePost}
                savePostClicked={this.savePost}
                />)}
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
        postActions: bindActionCreators(postActions, dispatch),
        templatesActions: bindActionCreators(templatesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);