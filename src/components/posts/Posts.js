import React, { Component } from 'react';
import postsStore from './../../stores/postsStore';

import Post from './Post';
import PostActions from '../../actions/postActions';

export default class Posts extends Component {

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
            <div className="list">
                <Post key="new" post={{_id: "new", title: "", images: []}} />
                {this.state.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
        );
    }
}