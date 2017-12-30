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
                    <div className="section">Art</div>
                    <div className="delimiter">/</div>
                    <div className="section">Store</div>
                    <div className="delimiter">/</div>
                    <div className="section">Contacts</div>
                    <div className="delimiter">/</div>
                    <div className="section">Settings</div>
                </div>
            </div>
        )
    }
}
