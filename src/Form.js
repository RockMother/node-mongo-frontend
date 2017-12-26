import React, {Component} from 'react';
import './Post.css';
import './Form.css';

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.sendPost = this.sendPost.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    // viewForm(event) {
    //
    //     let post = {};
    //
    //     post.title = document.getElementById("title").value;
    //     post.texts = document.getElementById("texts").value.split(';');
    //     post.categories = document.getElementById("categories").value.split(';');
    //     post.images = document.getElementById("images").files[0];
    //
    //     sendPost(post);
    // }

    sendPost() {

        let post = this.state.post;

        console.log(post)

        const API_URL = 'https://cms-dot.herokuapp.com/api/posts';

        const formData = new FormData();

        formData.append("title", post.title);

        formData.append("texts[]", post.texts);

        formData.append("categories[]", post.categories);

        formData.append("images", post.images);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', API_URL);
        xhr.send(formData);

        this.state.post.viewForm();
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

    mouseLeave() {
        // console.log("leave");
        // this.state.post.viewForm()

    }

    render() {
        return (
            <div className="block form" onMouseLeave={this.mouseLeave}>
                <div className="text">

                    {/*<div className="id">{this.state.post._id}</div>*/}

                    {/*<input type="text"*/}
                           {/*name="title"*/}
                           {/*placeholder="Some title here please"*/}
                           {/*value={this.state.post.title}*/}
                           {/*onChange={this.handleChangeTitle} />*/}

                    <textarea name="text"
                              placeholder="Some text here"
                              value={this.state.post.title}
                              onChange={this.handleChangeTitle} />

                    {/*{this.state.texts.map(text => <div key={text._id}>{text.name}</div>)}*/}

                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}
                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}

                    {/*<div contentEditable={true} id="texts">{this.state.post.texts.length}</div>*/}
                    {/*<div contentEditable={true} id="categories">{this.state.post.categories.length}</div>*/}
                    {/*<div contentEditable={true} id="images">{this.state.post.images.length}</div>*/}

                </div>

                <div className="buttons">
                    <span className="button" onClick={this.sendPost}>Save</span>
                    <span className="button" onClick={this.sendPost}><b>B</b></span>
                    <span className="button" onClick={this.sendPost}>Link</span>
                    <span className="button right" onClick={this.deletePost}>Delete</span>
                </div>
            </div>
        );
    }
}

export default Form;