import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './menu/Menu';
import PostsContainer from './posts/PostsContainer';
import TemplatesContainer from './templates/TemplatesContainer';
import LoginForm from './login/loginForm/LoginForm';

class App extends Component {
    render() {
        const states = this.props.categories.map((category, index) => {
            return <Route exact
                key={index}
                path={`/${category.toLowerCase()}`}
                component={() => category === 'Templates'? <TemplatesContainer/> : <PostsContainer category={category} />} />
        });
        states.push(<Route key={states.length} path="/login" component={() => <LoginForm/>} />);
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
