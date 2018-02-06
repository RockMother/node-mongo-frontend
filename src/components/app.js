import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './menu/Menu';
import Posts from './posts/Posts';
import TemplatesPage from './templates/TemplatesPage';
import Nothing from './nothing/Nothing';
import categoriesStore from './../stores/categoriesStore';

class App extends Component {
    render() {
        return (
            <main>
                <Menu/>
                <Switch>
                    <Route exact path='/templates' component={TemplatesPage}/>
                    <Route exact path='/nothing' component={Nothing}/>
                    {
                        categoriesStore.getCategories().map((category, index) => {
                            return <Route exact
                                          key={index}
                                          path={`/${category.toLowerCase()}`}
                                          render={() => <Posts category={category}/> }/>
                        })
                    }
                    <Redirect path='/' to={`/${categoriesStore.getCategories()[0].toLowerCase()}`} />
                </Switch>
            </main>
        );
    }
}

export default App;
