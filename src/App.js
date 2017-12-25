import React, {Component} from 'react';
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

        const API_URL = 'https://cms-dot.herokuapp.com/api/posts';

        axios.get(API_URL).then(res => {

            console.log(res)

            const posts = res.data;
            this.setState({posts});
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post._id}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
