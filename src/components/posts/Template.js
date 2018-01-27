import React, {Component} from 'react';
import './Post.css';
// import Form from './Form';
// import Template from './Template';
import Images from './Images';

import config from '../../config';

class Template extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.editPost = this.editPost.bind(this);
    }

    editPost() {

        this.state.post.edit()
    }

    render() {
        return (

            <div className="block" onClick={this.editPost}>

                <div className="text">
            
                    <div>{this.state.post.title}</div>
            
                </div>

                <Images images={this.state.post.images} />

            </div>
            
        );
    }
}

export default Template;