import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Menu.css';
import { connect } from 'react-redux';

class Menu extends Component {
    render() {
        return (
            <div id="head">
                <div id="menu">
                    {this.props.categories.length === 0 ? 'No categories' :
                        this.props.categories.map((category, index) => {
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

export default connect((state) => {
    return {
        categories: state.categories
    }
}, null, null, { pure: false })(Menu);
