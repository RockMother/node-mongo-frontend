import React, {Component} from 'react';

import PostView from './PostView';
import PostEdit from './PostEdit';

import './Post.css';

export default class Post extends Component {

    constructor(props) {

        super(props);

        this.state = {
            post: props.post,
            isEdit: false
        };

        this.isEdit = this.isEdit.bind(this);
    }

    isEdit() {
        this.setState({isEdit: !this.state.isEdit})
    }

    render() {
        return (

            this.state.isEdit === false ?
                <PostView key={this.state.post._id} post={this.state.post} isEdit={this.isEdit}/> :
                <PostEdit key={this.state.post._id} post={this.state.post} isEdit={this.isEdit} />
        );
    }
}