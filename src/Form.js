import React, {Component} from 'react';
import './Post.css';

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = props.post;

        this.sendPost = this.sendPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    // editPost(event) {
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

        let post = this.state;

        const API_URL = 'https://cms-dot.herokuapp.com/api/posts';

        const formData = new FormData();

        formData.append("title", post.title);

        formData.append("texts[]", post.texts);

        formData.append("categories[]", post.categories);

        formData.append("images", post.images);

        let xhr = new XMLHttpRequest();
        xhr.open('POST', API_URL);
        xhr.send(formData);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
    }

    mouseLeave() {
        console.log("leave");
        this.state.editPost()

    }

    render() {
        return (
            <div className="block" onMouseLeave={this.mouseLeave}>
                <div className="text">

                    <div className="id">{this.state._id}</div>

                    {/*<div id="title" con>{this.props.post.title}</div>*/}
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>

                    {/*{this.state.texts.map(text => <div key={text._id}>{text.name}</div>)}*/}

                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}
                    {/*{this.state.posts.map(post => <Post key={post._id} post={post} />)}*/}

                    {/*<div contentEditable={true} id="texts">{this.state.post.texts.length}</div>*/}
                    {/*<div contentEditable={true} id="categories">{this.state.post.categories.length}</div>*/}
                    {/*<div contentEditable={true} id="images">{this.state.post.images.length}</div>*/}

                </div>

                <div className="text">
                    <span className="button" onClick={this.editPost}>Save</span>
                    <span className="button" onClick={this.deletePost}>Delete</span>
                </div>
            </div>
        );
    }
}

export default Form;