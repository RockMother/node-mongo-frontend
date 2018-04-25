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
                    name: props.category
                }],
                images: [],
                template: props.newPostTemplate
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
                {this.props.showNewPost &&
                    <Post key="new"
                        post={this.state.newPost}
                        savePostClicked={this.savePostClicked}
                        hideTemplatesButton={this.props.hideTemplatesButton}
                        hideDeleteButton={true} />}
                {/*</Post>*/}
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