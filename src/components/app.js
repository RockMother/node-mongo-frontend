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
                    <Route exact path='/templates' component={TemplatesPage}/>
                    <Route exact path='/:category' component={Posts}/>
                    <Redirect path='/' to={`/${categoriesStore.getCategories()[0].toLowerCase()}`} />
                </Switch>
            </main>
        );
    }
}

export default App;
