import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './menu/Menu';

import './app.css';


import PostPage from './posts/postPage';
import TemplatesPage from './templates/TemplatesPage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={PostPage}/>
                    <Route exact path='/templates' component={TemplatesPage}/>
                </Switch>
            </main>
        );
    }
}

export default App;
