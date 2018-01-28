import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './menu/Menu';

import PostPage from './posts/PostsPage';
import TemplatesPage from './templates/TemplatesPage';

import Contacts from './contacts/Contacts';

class App extends Component {
    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={PostPage}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/templates' component={TemplatesPage}/>
                </Switch>
            </main>
        );
    }
}

export default App;
