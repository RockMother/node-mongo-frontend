import React, {Component} from 'react';
import './Post.css';

import Images from './elements/Images';
import Title from './elements/Title';
import Text from './elements/Text';

class PostView extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post
        };

        this.editPost = this.editPost.bind(this);
    }

    editPost() {
        this.props.isEdit();
    }

    render() {
        return (

            <div className="block" onClick={this.editPost}>

                <Title title={this.state.post.title} />

                <Text texts={this.state.post.texts} />

                <Images images={this.state.post.images} />

            </div>
        );
    }
}

export default PostView;