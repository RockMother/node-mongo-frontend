import React, { Component } from 'react';
import './Post.css';

import PostTemplate from './PostTemplate';
import config from '../../config';

import Buttons from "./elements/Buttons";
import TemplateSelector from './elements/TemplateSelector/TemplateSelector';
import { bindToThis } from '../../utils/utils';
import { addOrUpdate } from '../../utils/array';
import templateParserService from '../../services/templateParserService';


class Post extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);

        bindToThis(this,
            this.savePost,
            this.deletePost,
            this.cancelClicked,
            this.onTemplateClicked,
            this.setEdit,
            this.imageAdded);

        this.titleChanged = this.fieldChanged.bind(this, 'title');
        this.codeChanged = this.fieldChanged.bind(this, 'code');
        this.onTemplateSelected = this.fieldChanged.bind(this, 'template');

    }

    getImageStatesCollection(post) {
        if (post.template) {
            const images = [];
            const imageCount = templateParserService.getImageBlocksCount(post.template.template);
            for (let i = 0; i < imageCount; i++) {
                images.push({
                    orderInTemplate: i
                });
            }
            if (post.images && post.images.length > 0) {
                post.images.forEach(image => {
                    if (image.orderInTemplate <= imageCount) {
                        images[image.orderInTemplate] = {
                            url: config.API_URL + '/image/' + image.imageId,
                            imageName: image.imageName,
                            orderInTemplate: image.orderInTemplate,
                            origin: image
                        }
                    }
                });
            }
            if (post.newImages && post.newImages.length > 0) {
                post.newImages.forEach(image => {
                    if (image.orderInTemplate <= imageCount) {
                        post.newImages.forEach(image => {
                            images[image.orderInTemplate] = {
                                url: image.preview,
                                imageName: image.name,
                                orderInTemplate: image.orderInTemplate
                            };
                        });
                    }
                })
            }
            return images;
        }
        return [];
    }

    fillImagesForSave(post) {
        const images = [];
        this.state.images.forEach(image => {
            if (!image.isNew) {
                if (post.newImages.findIndex(i => i.orderInTemplate === image.orderInTemplate) === -1) {
                    images.push(image.origin);
                } else {
                    // Move to deleted collection
                }
            }
        });
        return images;
    }

    getInitialState(props) {
        const { categories, texts, template, title, _id, images, code } = props.post;
        const post = { categories, texts, template, newImages: [], title, _id, images, code };
        return {
            post,
            images: this.getImageStatesCollection(post),
            isEdit: false,
            showTemplateSelector: false
        }
    }

    setEdit() {
        if (!this.state.isEdit)
            this.setState({ isEdit: true });
    }

    cancelClicked() {
        this.setState(this.getInitialState(this.props));
        this.setState({ isEdit: false });
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    savePost() {
        const post = this.state.post;
        post.images = this.fillImagesForSave(post);
        this.props.savePostClicked(post);
        this.setState({ isEdit: false });
    }

    deletePost() {
        this.props.deletePostClicked(this.props.post._id);
    }

    onTemplateClicked() {
        this.setState({ showTemplateSelector: !this.state.showTemplateSelector });
    }

    fieldChanged(name, value) {
        const post = this.state.post;
        post[name] = value;
        this.setState({ post });
    }

    imageAdded(image, orderInTemplate) {
        const post = this.state.post;
        image.orderInTemplate = orderInTemplate;
        addOrUpdate(post.newImages, image, i => i => i.orderInTemplate === orderInTemplate);
        this.setState({ post, images: this.getImageStatesCollection(post) });
    }

    render() {
        return (
            <div className={this.state.isEdit ? "block edit" : "block" + (this.props.post._id ? "" : " new")} onClick={this.setEdit}>
                <div className="paper">
                    {/*We need some render here*/}
                    {
                        this.state.post.template && <PostTemplate
                            template={this.state.post.template}
                            isEdit={this.state.isEdit}
                            title={this.state.post.title}
                            code={this.state.post.code}
                            images={this.state.images}
                            onImageAdded={this.imageAdded}
                            onTitleChanged={this.titleChanged}
                            onCodeChanged={this.codeChanged} />
                    }
                    {/*End of render*/}
                    {
                        this.state.isEdit &&
                        <Buttons onTemplateClicked={!this.props.hideTemplatesButton && this.onTemplateClicked}
                            onSaveClicked={this.savePost}
                            onDeleteClicked={this.deletePost}
                            onCancelClicked={this.cancelClicked} />
                    }
                </div>
                {
                    this.state.isEdit && this.state.showTemplateSelector && <TemplateSelector
                        selectedTemplate={this.state.post.template}
                        onTemplateSelected={this.onTemplateSelected} />
                }
            </div>
        );
    }
}

export default Post;