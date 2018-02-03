import React, { Component } from 'react';
import './Post.css';
import './PostEdit.css';

import Title from './elements/Title';
import Images from './elements/Images';
import Code from './elements/Code';
import Text from './elements/Text';
import Appender from './elements/Appender';
import Categories from './elements/Categories';

import Buttons from "./elements/Buttons";

class PostEdit extends Component {

    constructor(props) {

        // if (props.post._id === "new")
        //     props.post.title = "";

        super(props);

        // TODO Use fields separately instead of the post object
        this.state = {
            post: props.post,
        };

        // this.savePost = this.savePost.bind(this);
        // this.cancelPost = this.cancelPost.bind(this);
        // this.deletePost = this.deletePost.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeImages = this.handleChangeImages.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);

        this.editPost = this.editPost.bind(this);
    }

    handleChangeTitle(event) {
        const { post } = this.state;
        post.title = event.target.value;
        this.setState({ post: post });
    }

    handleChangeText(event) {
        const { post } = this.state;
        post.text = event.target.value;
        this.setState({ post: post });
    }

    handleChangeImages(event) {
        const { post } = this.state;
        post.images = event.target.value;
        this.setState({ post: post });
    }

    handleChangeCode(event) {
        const { post } = this.state;
        post.code = event.target.value;
        this.setState({ post: post });
    }


    onDrop(files) {
        console.log(files);
        const { post } = this.state;
        post.files = files;
        this.setState({ post: post });
    }

    editPost() {
        this.props.setEdit();
    }

    render() {
        return (
            <div className={this.props.isEdit ? "block edit" : "block" + (this.state.post._id === "new" ? " new" : "")} onClick={!this.props.isEdit ? this.editPost : function () {}}>
                <Title title={this.state.post.title} onChange={this.handleChangeTitle} />

                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />
                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />
                <Images images={this.state.post.images} />

                <Images images={this.state.post.images}/>

                {this.props.stateEdit && this.state.post.title.length > 0 ? <Buttons post={this.state.post} isEdit={this.props.setEdit} /> : ''}

            </div>
        );
    }
}

export default PostEdit;