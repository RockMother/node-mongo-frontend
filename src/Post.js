import React, {Component} from 'react';
import './Post.css';

class Post extends Component {

// {_id, __v, images, categories, texts}

    render() {
        return (
            <div className="block">
                <div className="text">{this.props.post._id}</div>
            </div>
        );
    }
}

export default Post;