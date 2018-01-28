import React, { Component } from 'react';
import postsStore from './../../stores/postsStore';

import PostList from './PostList';
import PostActions from '../../actions/postActions';

import Menu from '../menu/Menu';

import '../app.css';

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: postsStore.getAllPosts() 
        };

    }
    componentDidMount(){
        PostActions.getAllPosts();
        postsStore.addChangeListener(() => this.onChange());
    }
    componentWillUnmount(){
        postsStore.removeChangeListener(() => this.onChange());
    }
    onChange() {
        this.setState({ posts: postsStore.getAllPosts() });
    }
    removePost() {

    }
    render() {
        return (
            <PostList posts={this.state.posts} />
        );
    }
}