import React, {Component} from 'react';
import '../Post.css';

import PostActions from '../../../actions/postActions';

export default class Buttons extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
        };

        this.savePost = this.savePost.bind(this);
        this.cancelPost = this.cancelPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    savePost() {
        // let post = this.state.post;
        // post.image = document.getElementById("fileUpload").files[0];

        PostActions.savePost(this.state.post, this.props.setEdit);
    }

    cancelPost() {
        this.props.setEdit();
    }

    deletePost() {
        //TODO delete from global state
        PostActions.deletePost(this.state.post);
    }

    render(){
        return (
            <div className="buttons">

                {/*<div className="button" onClick={console.log('bold')}><b>B</b></div>*/}
                {/*<div className="button" onClick={console.log('get post link')}>Link</div>*/}

                <div className="button green" onClick={this.savePost}>Save</div>
                <div className="button red" onClick={this.deletePost}>Delete</div>
                <div className="button" onClick={this.cancelPost}>Cancel</div>

            </div>
        )
    }
}


