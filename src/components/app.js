import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.css';


import Menu from './menu/Menu';
import Posts from './posts/Posts';
import TemplatesPage from './templates/TemplatesPage';
import { withRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <main>
                <Menu />
                <Switch>
                    <Route exact path='/templates' component={TemplatesPage} />
                    {
                        this.props.categories.map((category, index) => {
                            return <Route exact
                                key={index}
                                path={`/${category.toLowerCase()}`}
                                component={() => <Posts category={category} />} />
                        })
                    }
                    <Redirect path='/' to={`/${this.props.categories[0].toLowerCase()}`} />
                </Switch>
            </main>
        );
    }
}

export default withRouter(connect((state) => {
    return {
        categories: state.categories
    }
})(App));
