import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './menu/Menu';
import PostsContainer from './posts/PostsContainer';
import TemplatesContainer from './templates/TemplatesContainer';
import Login from './settings/Login';
import Settings from './settings/Settings';

class App extends Component {
    render() {

        // let system = [];
        // system.push(<Route key={states.length} path="/login" component={() => <Login/>} />);
        // system.push(<Route key='settings' path="/settings" component={() => <Settings/>} />);

        let states = this.props.categories.map((category, index) => {
            return <Route exact
                key={index}
                path={`/${category.toLowerCase()}`}
                component={() => category === 'Templates' || category === 'Settings' ?
                    (category === 'Templates' ? <TemplatesContainer/> : <Settings/>) : <PostsContainer category={category} />}
            />
        });

        // const states = [].push.apply(system, category);

        return (
            <main>
                <Menu />
                <Switch>
                    {
                        states
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
