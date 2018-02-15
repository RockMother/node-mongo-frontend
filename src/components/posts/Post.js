import React, {Component} from 'react';
import './Post.css';

import {connect} from 'react-redux';

import PostTemplate from './PostTemplate';
import config from '../../config';

import Buttons from "./elements/Buttons";
import * as postActions from '../../actions/postActions';
import TemplateSelector from './elements/TemplateSelector/TemplateSelector';
import { bindActionCreators } from 'redux';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);

        this.savePost = this.savePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
        this.onTemplateClicked = this.onTemplateClicked.bind(this);
        this.setEdit = this.setEdit.bind(this);

        this.imageAdded = this.imageAdded.bind(this);
        this.titleChanged = this.fieldChanged.bind(this, 'title');
        this.codeChanged = this.fieldChanged.bind(this, 'code');
        this.onTemplateSelected = this.onTemplateSelected.bind(this);
    }

    getInitialState(props) {
        const images = [];
        if (props.post.images && props.post.images.length > 0) {
            props.post.images.forEach((image, index) => {
                images.push({
                    url: config.API_URL + '/image/' + image.imageId,
                    imageName: image.imageName
                });
            });
        }
        return {
            post: Object.assign({}, props.post),
            images,
            isEdit: false,
            showTemplateSelector: false
        }
    }

    setEdit() {
        if (!this.state.isEdit)
            this.setState({isEdit: !this.state.isEdit});
    }

    cancelClicked() {
        this.setState(this.getInitialState(this.props));
        this.setState({isEdit: false});
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    savePost() {
        this.props.savePostClicked(this.state.post);
        this.setState({isEdit: false});
    }

    deletePost() {
        this.props.deletePostClicked(this.props.post._id);
    }

    onTemplateSelected(template) {
        const post = this.state.post;
        post.template = template;
        this.setState({post});
    }

    onTemplateClicked() {
        this.setState({ showTemplateSelector: !this.state.showTemplateSelector });
    }

    fieldChanged(name, value) {
        const post = this.state.post;
        post[name] = value;
        this.setState({post});
    }

    imageAdded(image) {
        const post = this.state.post;
        post.newImages = post.newImages || [];
        post.newImages.push(image);
        const images = this.state.images.concat({
            imageName: image.name,
            url: image.preview
        });
        this.setState({post, images});
    }

    render() {
        return (
            <div className={this.state.isEdit ? "block edit" : "block" + (this.props.post._id ? "" : " new")} onClick={this.setEdit}>
                {/*We need some render here*/}
                {
                    this.state.post.template ? <PostTemplate
                        template={this.state.post.template}
                        isEdit={this.state.isEdit}
                        title={this.state.post.title}
                        code={this.state.post.code}
                        images={this.state.images}
                        onImageAdded={this.imageAdded}
                        onTitleChanged={this.titleChanged}
                        onCodeChanged={this.codeChanged}
                    /> : ""
                }
                {/*End of render*/}
                {this.state.isEdit ?
                    <Buttons onTemplateClicked={this.onTemplateClicked} 
                            onSaveClicked={this.savePost}
                            onDeleteClicked={this.deletePost}
                            onCancelClicked={this.cancelClicked} /> : ''}

                {this.state.isEdit && this.state.showTemplateSelector ? <TemplateSelector
                    selectedTemplate={this.state.post.template}
                    onTemplateSelected={this.onTemplateSelected} /> : ""}
            </div>
        );
    }
}

export default Post;