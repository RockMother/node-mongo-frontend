import React, {Component} from 'react';
import '../Post.css';

export default class Categories extends Component {
    render(){
        return (
            <div className="buttons categories">
                {this.props.categories ? this.props.categories.map(category =>

                    <div className="button category"
                         key={category.name}>{category.name}</div>

                ) : <div className="button category">Art</div>}
            </div>
        )
    }
}