import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {

        axios.get(`https://cms-dot.herokuapp.com/api/posts`).then(res => {

                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
