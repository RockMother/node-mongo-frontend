import React, { Component } from 'react';

import Post from '../posts/Post';

export default class Nothing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                title: "Some new here",
                template: {
                    "_id": "5aa138b3c6baf3b7171b5b79",
                    "title": "A lot of text",
                    "template": "<div class = \"row\"><div class=\"template-title\"></div></div>",
                    "__v": 0
                },
            }],
            root: true,
        }
    }

    render() {
        return (
            <div className="center nothing">
                {<Post key={this.state.posts[0]._id}
                       post={this.state.posts[0]} />}
            </div>
        );
    }
}