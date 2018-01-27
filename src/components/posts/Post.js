import React, {Component} from 'react';
import './Post.css';
import PostEdit from './PostEdit';
import Template from './Template';

class Post extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
            isEdit: false
        };

        this.state.post.edit = () => {
            this.setState({isEdit: !this.state.isEdit})
        };
    }

    render() {
        return (

            this.state.isEdit === false ?
                <Template key={this.state.post._id} post={this.state.post} /> :
                <PostEdit key={this.state.post._id} post={this.state.post} />
        );
    }
}

export default Post;