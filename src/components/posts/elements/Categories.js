import React, {Component} from 'react';
import '../Post.css';

export default class Categories extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="buttons categories">
                {this.props.categories ? this.props.categories.map(category =>
                    <div className="button category">{category.name}</div>
                ) : ''}
            </div>
        )
    }
}