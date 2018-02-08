import React, { Component } from 'react';
import './Post.css';
import config from '../../config';

import Title from './elements/Title';
import Images from './elements/Images';
//import Code from './elements/Code';
import Text from './elements/Text';
//import Appender from './elements/Appender';
//import Categories from './elements/Categories';

import Buttons from "./elements/Buttons";
import postActions from '../../actions/postActions';
import TemplateSelector from './elements/TemplateSelector/TemplateSelector';

class PostEdit extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState(this.props);

        this.savePost = this.savePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
        this.editPost = this.props.setEdit.bind(this);

        this.imageAdded = this.imageAdded.bind(this);

        this.handleChangeTitle = this.fieldChanged.bind(this, 'title');
        this.handleChangeText = this.fieldChanged.bind(this, 'text');
        this.handleChangeCode = this.fieldChanged.bind(this, 'code');
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
            images
        }
    }

    cancelClicked() {
        this.setState(this.getInitialState(this.props));
        this.editPost();
    }

    async savePost() {
        await postActions.savePost(this.state.post);
        this.editPost();
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps));
    }

    deletePost() {
        postActions.deletePost(this.props.post._id);
    }

    imageAdded(image) {
        const post = this.state.post;
        post.newImages = post.newImages || [];
        post.newImages.push(image);
        const images = this.state.images.concat({
            imageName: image.name,
            url: image.preview
        });
        this.setState({ post, images });
    }

    fieldChanged(name, event) {
        const post = this.state.post;
        post[name] = event.target.value;
        this.setState({ post });
    }

    render() {
        return (
            <div className={this.props.isEdit ? "block edit" : "block" + (this.props.post._id ? "" : " new")} onClick={!this.props.isEdit ? this.editPost : function () { }}>

                {/*We need some render here*/}

                <div className="row">
                    <Title title={this.state.post.title} onChange={this.handleChangeTitle} />
                    <Images images={this.state.images} imageAdded={this.imageAdded} isEdit={this.props.isEdit} />
                </div>

                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />

                {/*End of render*/}

                {this.props.isEdit && (this.state.post.title.length > 0 || this.state.images.length > 0) ?
                    <Buttons saveClicked={this.savePost}
                             deleteClicked={this.deletePost}
                             cancelClicked={this.cancelClicked} /> : ''}

                {this.props.isEdit ? <TemplateSelector/>: ""}

            </div>
        );
    }
}

export default PostEdit;