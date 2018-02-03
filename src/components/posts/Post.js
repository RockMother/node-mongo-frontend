import React, { Component } from 'react';
import PostEdit from './PostEdit';
import './Post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };

        this.isEdit = this.isEdit.bind(this);
    }

    isEdit() {
        this.setState({ isEdit: !this.state.isEdit })
    }

    render() {
        return (
            <PostEdit key={this.props.post._id} post={this.props.post} stateEdit={this.state.isEdit} isEdit={this.isEdit} />
        );
    }
}