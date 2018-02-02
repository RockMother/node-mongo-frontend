import React, {Component} from 'react';
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

        let post = this.state.post;
        post.title =  event.target.value;
        this.setState({post: post});
    }

    handleChangeText(event) {

        let post = this.state.post;
        post.text =  event.target.value;
        this.setState({post: post});
    }

    handleChangeImages(event) {

        let post = this.state.post;
        post.images =  event.target.value;
        this.setState({post: post});
    }

    handleChangeCode(event) {

        let post = this.state.post;
        post.code =  event.target.value;
        this.setState({post: post});
    }


    onDrop(files) {
        console.log(files);

        let post = this.state.post;
        post.files =  files;
        this.setState({post: post});
    }

    editPost() {
        this.props.isEdit();
    }

    render() {
        return (
            <div className={this.props.stateEdit ? "block edit" : "block" + (this.state.post._id === "new" ? " new" : "")} onClick={!this.props.stateEdit ? this.editPost : function() {}}>

                <Title title={this.state.post.title} onChange={this.handleChangeTitle} />

                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />

                <Images images={this.state.post.images}/>

                {this.props.stateEdit && this.state.post.title.length > 0 ? <Buttons post={this.state.post} isEdit={this.props.isEdit} /> : ''}

            </div>
        );
    }
}

export default PostEdit;