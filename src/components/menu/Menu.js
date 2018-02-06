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

                    {this.state.categories.length === 0 ? 'No categories' :
                        this.state.categories.map((category, index) => {
                            return <span key={category}>
                                {index !== 0 ? <span className="delimiter">/</span> : ''}
                                <NavLink exact
                                    className="section"
                                    to={'/' + category.toLowerCase()}
                                    activeClassName='active'>{category}</NavLink>
                            </span>;
                        })
                    }

                </div>
            </div>
        )
    }
}
