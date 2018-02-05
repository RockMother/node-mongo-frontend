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
                title: "",
                texts: [],
                categories: [{
                    name: this.props.category
                }],

                images: []
            }
        }
    }

    componentDidMount() {
        postActions.getPosts(this.props.category);
        postsStore.addChangeListener(() => this.onChange());
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            postActions.getPosts(nextProps.category);
        }
    }

    componentWillUnmount() {
        postsStore.removeChangeListener(() => this.onChange());
    }

    onChange() {
        this.setState({ posts: postsStore.getPosts() });
    }

    render() {
        return (
            <div className="list">
                {this.state.root ? <Post key="new" post={this.state.newPost} /> : ''}
                {this.state.posts.map(post => <Post key={post._id} post={post} />)}
            </div>
        );
    }
}