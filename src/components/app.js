import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './menu/Menu';
import PostsContainer from './posts/PostsContainer';
import TemplatesContainer from './templates/TemplatesContainer';
import Login from './auth/Login';
import Registration from './auth/Registration';
import ForgotPassword from './auth/ForgotPassword';

class App extends Component {
    render() {
        const states = this.props.categories.map((category, index) => {
            return <Route exact
                key={index}
                path={`/${category.toLowerCase()}`}
                component={() => category === 'Templates'? <TemplatesContainer/> : <PostsContainer category={category} />} />
        });
        states.push(<Route key={states.length} path="/login" component={() => <Login/>} />);
        states.push(<Route key={states.length} path="/register" component={() => <Registration/>} />);
        states.push(<Route key={states.length} path="/restore" component={() => <ForgotPassword/>} />);
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
