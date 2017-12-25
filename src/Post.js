import React, {Component} from 'react';
import './Post.css';
import Form from './Form';
import Template from './Template';

class Post extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
            edit: false
        };

        this.state.post.editPost = () => {
            this.setState({edit: !this.state.edit})
        };

    }

    render() {
        return (

            this.state.edit === false ?
                <Template key={this.state.post._id} post={this.state.post} /> :
                <Form key={this.state.post._id} post={this.state.post} />
        );
    }
}

export default Post;