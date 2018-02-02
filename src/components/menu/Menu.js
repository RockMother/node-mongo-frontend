import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css';
import categoriesStore from './../../stores/categoriesStore';
// import Post from './Post';

export default class Menu extends Component {

    constructor(props) {

        super(props);
        this.state = {
            categories: categoriesStore.getCategories()
        };
    }

    render() {
        return (
            <div id="head">
                <div id="menu">

                    {this.state.categories.length === 0 ? 'No categories' : ''}

                    {this.state.categories.length > 0 ? <span key="/"><NavLink exact className="section" to={`/posts/${this.state.categories[0]}`} activeClassName='active'>{this.state.categories[0]}</NavLink></span> : ''}

                    {this.state.categories.length > 1 ?

                        this.state.categories.map(function (category, index) {

                            return (index !== 0 ? <span key={category}>
                                <span className="delimiter">/</span>
                                <NavLink exact
                                    className="section"
                                    to={'/posts/' + category}
                                    activeClassName='active'>{category}</NavLink>
                            </span> : '');
                        }

                        ) : ''}

                </div>
            </div>
        )
    }
}
