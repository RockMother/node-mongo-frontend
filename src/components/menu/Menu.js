import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css';
// import Post from './Post';

export default class Menu extends Component {

    constructor(props) {

        super(props);

        let categories = [];

        categories = ['Art', 'Store', 'Contacts'];

        categories.push('Settings');

        this.state = {
            categories: categories
        };
    }

    render(){
        return (
            <div id="head">
                <div id="menu">

                    {this.state.categories.length === 0 ? 'No categories' : ''}

                    {this.state.categories.length > 0 ? <span key="/"><NavLink exact className="section" to="/" activeClassName='active'>{this.state.categories[0]}</NavLink></span> : ''}

                    {this.state.categories.length > 1 ?

                        this.state.categories.map(function(category, index) {

                            return (index !== 0 ? <span key={category.toLowerCase()}>
                                <span className="delimiter">/</span>
                                <NavLink exact
                                         className="section"
                                         to={'/' + category.toLowerCase()}
                                         activeClassName='active'>{category}</NavLink>
                            </span> : '');
                        }

                    ) : ''}

                </div>
            </div>
        )
    }
}
