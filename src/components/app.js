import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nothing from './nothing/Nothing';

import Menu from './menu/Menu';
import PostsContainer from './posts/PostsContainer';

class App extends Component {
    render() {
        return (
            <main>
                <Menu />
                <Switch>
                    <Route exact path='/nothing' component={Nothing}/>
                    {
                        this.props.categories.map((category, index) => {
                            return <Route exact
                                key={index}
                                path={`/${category.toLowerCase()}`}
                                component={() => <PostsContainer category={category} />} />
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
