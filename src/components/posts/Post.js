import React, { Component } from 'react';

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
            this.imageAdded,
            this.onTextChanged,
            this.onTemplateSelected,
            this.imageRemoved,
            this.onBoldClicked);

        this.titleChanged = this.fieldChanged.bind(this, 'title');
        this.codeChanged = this.fieldChanged.bind(this, 'code');
    }

    getTextsStatesCollection(post) {
        if (post.template) {
            const texts = [];
            const textsCount = templateParserService.getTextBlocksCount(post.template.template);
            for (let i = 0; i < textsCount; i++) {
                texts.push({
                    orderInTemplate: i
                });
            }
            if (post.texts && post.texts.length > 0) {
                post.texts.forEach((text) => {
                    if (text.orderInTemplate <= textsCount) {
                        texts[text.orderInTemplate] = {
                            text: text.text,
                            orderInTemplate: text.orderInTemplate,
                            origin: text
                        }
                    }
                });
            }
            return texts;
        }
        return [];
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
                    if (image && image.orderInTemplate <= imageCount && post.deletedImages.findIndex(i => i.orderInTemplate === image.orderInTemplate) === -1) {
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
                if (post.newImages.findIndex(i => i.orderInTemplate === image.orderInTemplate) === -1
                    && post.deletedImages.findIndex(i => i.orderInTemplate === image.orderInTemplate) === -1) {
                    images.push(image.origin);
                }
            }
        });
        return images;
    }

    fillTextsForSave(post) {
        return [...this.state.texts.filter(t => t.text).map(t => {
            return {
                text: t.text,
                orderInTemplate: t.orderInTemplate
            };
        })];
    }

    getInitialState(props) {
        const { categories, texts, template, title, _id, images, code } = props.post;
        const post = { categories, texts, template, newImages: [], deletedImages: [], title, _id, images, code };
        return {
            post,
            texts: this.getTextsStatesCollection(post),
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
        const { post } = this.state;
        post.images = this.fillImagesForSave(post);
        post.texts = this.fillTextsForSave(post);
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
        const { post } = this.state;
        post[name] = value;
        this.setState({ post });
    }

    onTextChanged(text, orderInTemplate) {
        const texts = this.state.texts;
        texts[orderInTemplate].text = text;
        this.setState({ texts });
    }

    onTemplateSelected(template) {
        const post = this.state.post;
        post.template = template;
        this.setState({
            images: this.getImageStatesCollection(post),
            texts: this.getTextsStatesCollection(post),
            post
        });
    }

    imageAdded(image, orderInTemplate) {
        const { post } = this.state;
        image.orderInTemplate = orderInTemplate;
        addOrUpdate(post.newImages, image, i => i => i.orderInTemplate === orderInTemplate);
        this.setState({ post, images: this.getImageStatesCollection(post) });
    }

    removeImageFromArray(images, orderInTemplate) {
        images.splice(images.findIndex(i => i.orderInTemplate === orderInTemplate), 1);
    }

    imageRemoved(image) {
        const { post } = this.state;
        if (!image.origin) {
            this.removeImageFromArray(post.newImages, image.orderInTemplate);
        } else {
            post.deletedImages.push(image);
        }
        this.setState({ post, images: this.getImageStatesCollection(post) });
    }

    onBoldClicked() {

        console.log('onBoldClicked 1')

        console.log(getSelectionText())
    }

    render() {
        const blockClassName = `block ${this.state.isEdit ? 'edit' : this.props.post._id ? '' : 'new'}`;
        return (
            <div className={blockClassName} onClick={this.setEdit}>
                <div className="paper">
                    {/*We need some render here*/}
                    {
                        this.state.post.template && <PostTemplate
                            template={this.state.post.template}
                            isEdit={this.state.isEdit}
                            title={this.state.post.title}
                            code={this.state.post.code}
                            images={this.state.images}
                            texts={this.state.texts}
                            onImageAdded={this.imageAdded}
                            onImageDeleted={this.imageRemoved}
                            onTitleChanged={this.titleChanged}
                            onTextChanged={this.onTextChanged}
                            onCodeChanged={this.codeChanged} />
                    }
                    {/*End of render*/}
                    {
                        this.state.isEdit &&
                        <Buttons onTemplateClicked={!this.props.hideTemplatesButton && this.onTemplateClicked}
                            onSaveClicked={this.savePost}
                            onDeleteClicked={!this.props.hideDeleteButton && this.deletePost}
                            onCancelClicked={this.cancelClicked}
                            onBoldClicked={this.onBoldClicked} />
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

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

export default Post;