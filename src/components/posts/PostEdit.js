import React, { Component } from 'react';
import './Post.css';

import Title from './elements/Title';
import Images from './elements/Images';
import Code from './elements/Code';
import Text from './elements/Text';
import Appender from './elements/Appender';
import Categories from './elements/Categories';

import Buttons from "./elements/Buttons";
import postActions from '../../actions/postActions';

class PostEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: Object.assign({}, this.props.post, )
        } 

        this.savePost = this.savePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
        this.editPost = this.props.setEdit.bind(this);
        
        this.handleChangeTitle = this.fieldChanged.bind(this, 'title');
        this.handleChangeText = this.fieldChanged.bind(this, 'text');
        this.handleChangeImages = this.fieldChanged.bind(this, 'images');
        this.handleChangeCode = this.fieldChanged.bind(this, 'code');
    }

    cancelClicked() {
        this.setState({post: Object.assign({}, this.props.post)});
        this.editPost();
    }

    savePost(){
        postActions.savePost(this.state.post).then(() => {
            this.setState({post: Object.assign({}, this.props.post)});
            this.editPost();
        })
    }

    deletePost() {
        postActions.deletePost(this.props.post._id);
    }

    fieldChanged(name, event) {
        const post = this.state.post;
        post[name] = event.target.value;
        this.setState({post: post });
    }

    render() {
        return (
            <div className={this.props.isEdit ? "block edit" : "block" + (this.props.post._id ? "" : " new")} onClick={!this.props.isEdit ? this.editPost : function () { }}>
                <Title title={this.state.post.title} onChange={this.handleChangeTitle} />
                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />
                <Text texts={this.state.post.texts} onChange={this.handleChangeText} />
                <Images images={this.state.post.images} />
                <Images images={this.state.post.images} />
                {this.props.isEdit && this.state.post.title.length > 0 ?
                    <Buttons saveClicked={this.savePost}
                        deleteClicked={this.deletePost}
                        cancelClicked={this.cancelClicked} /> : ''}

            </div>
        );
    }
}

export default PostEdit;