import React, {Component} from 'react';

import {bindToThis} from '../../utils/utils'

export default class Login extends Component {
    constructor(props) {
        super(props);
        bindToThis(this, this.loginClicked);
    }

    loginClicked() {
        alert('Login clicked');
    }

    render() {
        return (
            <div className="block">
                <div className="paper">

                    <form className="form">
                        <div className='text'>Authorization</div>
                        <div className="vertical">
                            <input type="text" placeholder="Username or email" spellCheck="false" autoFocus='true'/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className='buttons'>

                            {/*<input type="button" value="Register"/>*/}
                            <input type="button" value="Forgot password"/>
                            <input type="button" value="Login" onClick={this.loginClicked}/>
                            {/*<input type="button" value="Submit"/>*/}
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}