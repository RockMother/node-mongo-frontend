import React, { Component } from 'react';
import PostEdit from './PostEdit';
import './Post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };

        this.setEdit = this.setEdit.bind(this);
    }

    setEdit() {
        this.setState({ isEdit: !this.state.isEdit })
    }

    render() {
        return (
            <PostEdit key={this.props.post._id} post={this.props.post} isEdit={this.state.isEdit} setEdit={this.setEdit} />
        );
    }
}