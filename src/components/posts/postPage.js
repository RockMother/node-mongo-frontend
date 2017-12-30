import React, { Component } from 'react';
import PostsStore from './../../stores/postsStore';

import PostList from './postList';
import PostActions from '../../actions/postActions';

import Menu from '../menu/Menu';

import '../app.css';

export default class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: PostsStore.getAllPosts() 
        };
    }
    componentDidMount(){
        PostActions.getAllPosts();
        PostsStore.addChangeListener(() => this.onChange());
    }
    componentWillUnmount(){
        PostsStore.removeChangeListener(() => this.onChange());
    }
    onChange() {
        this.setState({ posts: PostsStore.getAllPosts() });
    }
    removePost() {

    }
    render() {
        return (
            <PostList posts = {this.state.posts} />
        );
    }
}