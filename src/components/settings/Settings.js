import React, { Component } from 'react';

import Posts from '../posts/Posts';


export default class Settings extends Posts {

    constructor(props) {
        super(props);
        const { match: { category }} = this.props; 
        this.state = {
            posts: postsStore.getCategoryPosts(category)
        };
    }
}