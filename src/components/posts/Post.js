import React, { Component } from 'react';
import './Post.css';

import PostTemplate from './PostTemplate';
import config from '../../config';

import Buttons from "./elements/Buttons";
import TemplateSelector from './elements/TemplateSelector/TemplateSelector';
import { bindToThis } from '../../utils/utils';
import { addOrUpdate } from '../../utils/array';


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
            this.onTemplateSelected);

        this.titleChanged = this.fieldChanged.bind(this, 'title');
        this.codeChanged = this.fieldChanged.bind(this, 'code');

    }

    getInitialState(props) {
        const images = [];
        const { categories, texts, template, title, _id } = props.post;
        if (props.post.images && props.post.images.length > 0) {
            props.post.images.forEach((image, index) => {
                if (image)
                    images.push({
                        url: config.API_URL + '/image/' + image.imageId,
                        imageName: image.imageName,
                        orderInTemplate: image.orderInTemplate,
                        origin: image
                    });
            });
        }
        return {
            post: { categories, texts, template, newImages: [], title, _id },
            images,
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
        post.images = this.state.images.filter(i => !i.isNew && !post.newImages.find(ni => ni.orderInTemplate === i.orderInTemplate))
            .map(i => i.origin);
        this.props.savePostClicked(post);
        this.setState({ isEdit: false });
    }

    deletePost() {
        this.props.deletePostClicked(this.props.post._id);
    }

    onTemplateSelected(template) {
        const post = this.state.post;
        post.template = template;
        this.setState({ post });
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
        const addedImageForState = {
            imageName: image.name,
            url: image.preview,
            orderInTemplate: orderInTemplate,
            isNew: true
        };
        let images = this.state.images
        while (orderInTemplate > images.length) {
            images.push({
                orderInTemplate: images.length
            });
        }
        images = addOrUpdate(images, addedImageForState, i => i.orderInTemplate === orderInTemplate).sort((a, b) => a.orderInTemplate >= b.orderInTemplate);
        this.setState({ post, images });
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