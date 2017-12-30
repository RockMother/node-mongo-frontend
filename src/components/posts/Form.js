import React, {Component} from 'react';
import './Post.css';
import './Form.css';
import Images from './Images';
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

    savePost() {
        let post = this.state.post;
        post.image = document.getElementById("fileUpload").files[0];

        PostActions.createPost(post);
        this.state.post.viewForm();
    }

    deletePost() {
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

                <input type="file"
                       id="fileUpload"/>

                <Images images={this.state.post.images}/>

                <div className="buttons">
                    <span className="button" onClick={this.savePost}>Save</span>
                    <span className="button" onClick={console.log('bold')}><b>B</b></span>
                    <span className="button" onClick={console.log('get post link')}>Link</span>
                    <span className="button right" onClick={this.deletePost}>Delete</span>
                </div>
            </div>
        );
    }
}

export default Form;