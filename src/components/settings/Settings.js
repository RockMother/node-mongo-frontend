import React, {Component} from 'react';

import { bindToThis } from '../../utils/utils'
import MainSettings from "./MainSettings";
import PostSettings from "./PostSettings";
import Login from "./Login";

export default class Settings extends Component {

    render() {
        return (
            <div className="list">
                <MainSettings />
                <PostSettings />
                <Login />
            </div>
        );
    }
}