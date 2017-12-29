import React, {Component} from 'react';
import './Post.css';
import './Form.css';
import PostActions from '../../actions/postActions';

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
        this.mouseLeave = this.mouseLeave.bind(this);
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

    savePost() {
        PostActions.sendPost(this.state.post);
        this.state.post.viewForm();
    }

    deletePost() {
        PostActions.deletePost(this.state.post);
        this.state.post.viewForm();
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