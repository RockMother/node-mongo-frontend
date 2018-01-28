import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                <Post key="new" post={{_id: "new", title: "New", images: []}} />
                {this.props.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
        )
    }
}
