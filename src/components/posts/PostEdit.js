import React, {Component} from 'react';
import './Post.css';
import './PostEdit.css';

import Title from './elements/Title';
import Images from './elements/Images';
import Code from './elements/Code';
import Text from './elements/Text';
import Categories from './elements/Categories';
import Dropzone from 'react-dropzone'

import PostActions from '../../actions/postActions';

class PostEdit extends Component {

    constructor(props) {

        // if (props.post._id === "new")
        //     props.post.title = "";

        super(props);

        this.state = {
            post: props.post,
        };

        this.savePost = this.savePost.bind(this);
        this.cancelPost = this.cancelPost.bind(this);
        this.deletePost = this.deletePost.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeImages = this.handleChangeImages.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
    }

    savePost() {
        // let post = this.state.post;
        // post.image = document.getElementById("fileUpload").files[0];

        PostActions.savePost(this.state.post);
        this.props.isEdit();
    }

    cancelPost() {
        this.props.isEdit();
    }

    deletePost() {
        //TODO delete from global state
        PostActions.deletePost(this.state.post);
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

    render() {
        return (
            <div className="block edit">

                {/*Template elements here*/}

                <Title title={this.state.post.title} onChange={this.handleChangeTitle} />

                <Dropzone className="drop" onDrop={this.onDrop.bind(this)}>
                    <div className="title">Drop images here</div>
                    <Images images={this.state.post.images}/>
                </Dropzone>

                <Text texts={this.state.post.texts} />

                <Code onChange={this.handleChangeCode} />

                {/*End template elements*/}

                <Categories categories={this.state.post.categories} />

                <div className="buttons">

                    <div className="button" onClick={this.savePost}>Save</div>
                    <div className="button" onClick={this.cancelPost}>Cancel</div>

                    {/*<div className="button" onClick={console.log('bold')}><b>B</b></div>*/}
                    {/*<div className="button" onClick={console.log('get post link')}>Link</div>*/}

                    <div className="button right" onClick={this.deletePost}>Delete</div>

                </div>
            </div>
        );
    }
}

export default PostEdit;