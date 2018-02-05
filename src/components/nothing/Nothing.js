import React, { Component } from 'react';
import postsStore from './../../stores/postsStore';

import Post from '../posts/Post';
import postActions from '../../actions/postActions';

export default class Nothing extends Component {

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
                    name: this.props.category
                }],

                images: []
            }
        }
    }

    render() {
        return (
            <div className="center">
                {<Post post={this.state.newPost} />}
            </div>
        );
    }
}