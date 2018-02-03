import React, { Component } from 'react';
import postsStore from './../../stores/postsStore';

import Post from './Post';
import postActions from '../../actions/postActions';

export default class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: postsStore.getPosts(),
            root: true,
            newPost: {
                _id: "new",
                title: "",
                texts: [],
                categories: [{
                    name: this.props.match.params.category.charAt(0).toUpperCase() +
                        this.props.match.params.category.slice(1)}],

                    images: []
            }
        }
    }

    componentDidMount() {
        postActions.getPosts(this.props.match.params.category);
        postsStore.addChangeListener(() => this.onChange());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category !== nextProps.match.params.category) {
            postActions.getPosts(nextProps.match.params.category);
        }
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
                {this.state.root ? <Post key={this.state.newPost._id} post={this.state.newPost} /> : ''}
                {this.state.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
        );
    }
}