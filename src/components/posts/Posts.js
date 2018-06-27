import React, { Component } from 'react';

import config from '../../config';

import { bindToThis } from '../../utils/utils';
import BlockContainer from '../block/BlockContainer';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);
        bindToThis(this, this.deleteClicked, this.saveClicked);
    }

    getInitialState(props) {
        return {
            root: true,
            newPost: {
                title: "",
                texts: [],
                categories: [{
                    name: props.category
                }],
                images: [],
                template: props.newTemplate
            }
        }
    }

    deleteClicked(id) {
        this.props.delete(id);
    }

    saveClicked(originalPost, blockModel, template) {
        this.props.save(convertToPost(blockModel, template, originalPost));
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps))
    }

    render() {
        return (
            <div className="list">
                {this.props.showNewPost &&
                    <BlockContainer key="new"
                        model={convertPostToBlockModel(this.state.newPost)}
                        saveClicked={ this.saveClicked.bind(this, this.state.newPost) }
                        hideDeleteButton={true} />}
                {/*{this.props.posts.length === 0 && '<div>Nothing here</div>'}*/}
                {this.props.posts.length > 0 && this.props.posts.map(post => <BlockContainer key={post._id}
                    model={convertPostToBlockModel(post)}
                    template={post.template}
                    deleteClicked={ this.deleteClicked.bind(this, post._id) }
                    saveClicked={ this.saveClicked.bind(this, post) }
                />)}
            </div>
        );
    }
}

function convertImage(image) {
        return {
            url: config.API_URL + '/image/' + image.imageId,
            imageName: image.imageName,
            orderInTemplate: image.orderInTemplate,
            _id: image._id
        }
}

function getNewImages(blockModel) {
    return blockModel.images.map((image, index)  => {
        if (image !== null && image instanceof File) {
            image.orderInTemplate = index;
            return image;
        }
        return null;
    }).filter(i => i !== null);
}

function getImages(blockModel, originalPost){
    return originalPost.images.filter((image) => {
        return blockModel.images.length > image.orderInTemplate 
            && blockModel.images[image.orderInTemplate] !== null
            && blockModel.images[image.orderInTemplate]._id;
    });
}

function convertToPost(blockModel, template, originalPost) {
    return {
        _id: originalPost._id,
        titles: blockModel.titles.map((t, index) => {
            return {
                title: t,
                orderInTemplate: index
            }            
        }),
        texts: blockModel.texts.map((t, index) => {
            return {
                text: t,
                orderInTemplate: index
            }
        }),
        template: template,
        newImages: getNewImages(blockModel, originalPost),
        images: getImages(blockModel, originalPost),
        categories: originalPost.categories
    }
}

function convertPostToBlockModel(post) {
    return {
        titles: post.titles || [],
        texts: post.texts || [],
        images: post.images && post.images.length > 0? post.images.map(i => convertImage(i)): [],
    }
}

