import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './menu/Menu';

import './app.css';


import PostPage from './posts/postPage';

class App extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     posts: []
        // };
    }

    // componentDidMount() {

    //     const API_URL = 'https://cms-dot.herokuapp.com/api/posts';

    //     axios.get(API_URL).then(res => {

    //         console.log(res)

    //         const posts = res.data;
    //         this.setState({posts});
    //     });
    // }

    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={PostPage}/>
                </Switch>
            </main>
        );
    }
}

export default App;
