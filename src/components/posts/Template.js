import React, {Component} from 'react';
import './Post.css';
// import Form from './Form';
// import Template from './Template';

class Template extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.editPost = this.editPost.bind(this);
    }

    editPost() {

        this.state.post.viewForm()
    }

    render() {
        return (

            <div className="block" onClick={this.editPost}>

                <div className="text">
            
                    <div>{this.state.post.title}</div>
            
                </div>

            </div>
            
        );
    }
}

export default Template;