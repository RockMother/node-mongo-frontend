import React, { Component } from 'react';

import Posts from '../posts/Posts';


export default class Settings extends Posts {

    constructor(props) {

        super(props);

        this.state = {
            posts: postsStore.getCategoryPosts(this.props.location.pathname)
        };
    }
}