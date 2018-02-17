import React, { Component } from 'react';
import Post from './Post';

import { bindToThis } from '../../utils/utils';

export default class Posts extends Component {
    constructor(props) {
        super(props);

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

        bindToThis(this, this.deletePostClicked, this.savePostClicked);
    }

    deletePostClicked(id) {
        this.props.deletePost(id);
    }

    savePostClicked(post) {
        this.props.savePost(post);
    }

    render() {
        return (
            <div className="list">
                {this.state.root ? <Post key="new" post={this.state.newPost}
                    savePostClicked={this.savePostClicked}
                /> : ''}
                {this.props.posts.map(post => <Post key={post._id}
                    post={post}
                    hideTemplatesButton={this.props.hideTemplatesButton}
                    deletePostClicked={this.deletePostClicked}
                    savePostClicked={this.savePostClicked}
                />)}
            </div>
        );
    }
}