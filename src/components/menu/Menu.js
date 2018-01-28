import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css';
// import Post from './Post';

export default class Menu extends Component {

    constructor(props) {
        super(props);

        let categories = [];
    }

    render(){
        return (
            <div id="head">
                <div id="menu">
                    <NavLink exact className="section" to="/" activeClassName='active'>Art</NavLink>
                    <div className="delimiter">/</div>
                    <NavLink exact className="section" to="/comics" activeClassName='active'>Comics</NavLink>
                    <div className="delimiter">/</div>
                    <NavLink exact className="section" to="/store" activeClassName='active'>Store</NavLink>
                    <div className="delimiter">/</div>
                    <NavLink exact className="section" to="/contacts" activeClassName='active'>Contacts</NavLink>
                    <div className="delimiter">/</div>
                    <NavLink exact className="section" to="/templates" activeClassName='active'>Templates</NavLink>
                </div>
            </div>
        )
    }
}
