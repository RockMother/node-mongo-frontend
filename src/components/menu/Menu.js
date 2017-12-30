import React, {Component} from 'react';
import './Menu.css';
// import Post from './Post';

export default class Menu extends Component {

    constructor(props) {
        super(props);

        let categories = [];
    }

    render(){
        return (
            <div className="text">
                <div id="head">
                    <div class="section" onclick="spook()">Art</div>
                    <div class="delimiter">/</div>
                    <div class="section" onclick="store()">Store</div>
                    <div class="delimiter">/</div>
                    <div class="section" onclick="contacts()">Contacts</div>
                    <div class="delimiter">/</div>
                    <div class="section" onclick="contacts()">Settings</div>
                </div>
            </div>
        )
    }
}
