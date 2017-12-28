import React, {Component} from 'react';
import './Post.css';
import Form from './Form';
import Template from './Template';

class Post extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
            form: false
        };

        this.state.post.viewForm = () => {
            this.setState({form: !this.state.form})
        };

    }

    render() {
        return (

            this.state.form === false ?
                <Template key={this.state.post._id} post={this.state.post} /> :
                <Form key={this.state.post._id} post={this.state.post} />
        );
    }
}

export default Post;