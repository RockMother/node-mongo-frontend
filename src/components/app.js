import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './menu/Menu';
import Posts from './posts/Posts';
import TemplatesPage from './templates/TemplatesPage';
import categoriesStore from './../stores/categoriesStore';

class App extends Component {
    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/posts/:category' component={Posts}/>
                    <Route exact path='/templates' component={TemplatesPage}/>
                    <Redirect path='/' to={`/posts/${categoriesStore.getCategories()[0]}`} />
                </Switch>
            </main>
        );
    }
}

export default App;
