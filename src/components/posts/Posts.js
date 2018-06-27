import React, { Component } from 'react';
import Post from './Post';
import config from '../../config';

import { bindToThis } from '../../utils/utils';
import BlockContainer from '../block/BlockContainer';

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
                {/*{this.props.posts.length === 0 && '<div>Nothing here</div>'}*/}
                {this.props.posts.length > 0 && this.props.posts.map(post => <BlockContainer key={post._id}
                    model={convertPostToBlockModel(post)}
                    template={post.template}
                    hideTemplatesButton={this.props.hideTemplatesButton}
                    deletePostClicked={this.deletePostClicked}
                    savePostClicked={this.savePostClicked}
                />)}
            </div>
        );
    }
}

function convertImage(image) {
        return {
            url: config.API_URL + '/image/' + image.imageId,
            imageName: image.imageName,
            orderInTemplate: image.orderInTemplate
        }
}

function convertPostToBlockModel(post) {
    return {
        title: post.title || "",
        texts: post.texts || [],
        images: post.images && post.images.length > 0? post.images.map(i => convertImage(i)): [],
    }
}