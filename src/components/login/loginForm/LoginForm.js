import React, {Component} from 'react';

import { bindToThis } from './../../../utils/utils'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        bindToThis(this, this.loginClicked);
    }

    loginClicked(){
        alert('Login clicked');
    }

    render() {
        return (
            <div className="login-form">
                <div className="title">Login</div>
                <form className="fields">
                    <input type="text" placeholder="Username or email"/>
                    <input type="password" placeholder="Password"/>
                    <input  className="login-button" type="submit" value="Log in" onClick={this.loginClicked}/>
                </form>
                <div className="additional-links">
                    <input type="button" value="Register"/>
                    <div className="separator">/</div>
                    <input type="button" value="Forgot password"/>
                </div>
                
            </div>
        );
    }
}