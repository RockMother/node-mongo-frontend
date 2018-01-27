import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.posts.map(post => <Post key={post._id} post={post} />)
        )
    }
}
