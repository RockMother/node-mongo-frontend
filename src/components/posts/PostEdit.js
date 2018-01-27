import React, {Component} from 'react';
import './Post.css';
import './PostEdit.css';
import Images from './Images';
import Dropzone from 'react-dropzone'
import PostActions from '../../actions/postActions';

import config from '../../config';

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.savePost = this.savePost.bind(this);
        this.deletePost = this.deletePost.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);

        this.stopEditPost = this.stopEditPost.bind(this);
    }

    stopEditPost() {
        this.state.post.edit()
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

    onDrop(files) {
        console.log(files);

        let post = this.state.post;
        post.files =  files;
        this.setState({post: post});
    }



    savePost() {
        // let post = this.state.post;
        // post.image = document.getElementById("fileUpload").files[0];

        PostActions.createPost(this.state.post);
        this.state.post.viewForm();
    }

    deletePost() {
        //TODO delete from global state
        PostActions.deletePost(this.state.post);
    }

    render() {
        return (
            <div className="block form">

                <div className="text">

                    <input type="text"
                           name="title"
                           placeholder="Some title here please"
                           value={this.state.post.title}
                           onChange={this.handleChangeTitle} />

                </div>

                {/*<input type="file" id="fileUpload"/>*/}

                <Dropzone className="drop" onDrop={this.onDrop.bind(this)}>
                    <Images images={this.state.post.images}/>
                </Dropzone>

                <div className="buttons">
                    <span className="button" onClick={this.savePost}>Save</span>
                    <span className="button" onClick={this.stopEditPost}>Cancel</span>
                    <span className="button" onClick={console.log('bold')}><b>B</b></span>
                    <span className="button" onClick={console.log('get post link')}>Link</span>
                    <span className="button right" onClick={this.deletePost}>Delete</span>
                </div>
            </div>
        );
    }
}

export default Form;