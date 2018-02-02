import React, { Component } from 'react';
import postsStore from './../../stores/postsStore';

import Post from './Post';
import postActions from '../../actions/postActions';

export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: postsStore.getPosts(),
            root: true
        };
    }

    componentDidMount() {
        postsStore.addChangeListener(() => this.onChange());
    }

    componentWillReceiveProps(nextProps) {
        postActions.getPosts(nextProps.match.params.category);
    }

    componentWillUnmount() {
        postsStore.removeChangeListener(() => this.onChange());
    }

    onChange() {
        this.setState({ posts: postsStore.getPosts() });
    }

    removePost() {

    }

    render() {
        return (
            <div className="list">
                {this.state.root ? <Post key="new" post={{_id: "new", title: "", texts: [], categories: [], images: []}} /> : ''}
                {this.state.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
        );
    }
}