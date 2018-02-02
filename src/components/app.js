import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './menu/Menu';
import Posts from './posts/Posts';
import TemplatesPage from './templates/TemplatesPage';

import Settings from './settings/Settings';


class App extends Component {
    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route exact path='/store' component={Posts}/>
                    <Route exact path='/contacts' component={Posts}/>
                    {/*<Route exact path='/settings' component={Settings}/>*/}

                    <Route exact path='/templates' component={TemplatesPage}/>
                </Switch>
            </main>
        );
    }
}

export default App;
