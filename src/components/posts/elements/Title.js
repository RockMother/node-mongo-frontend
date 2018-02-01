import React, {Component} from 'react';

export default class Title extends Component {
    render(){
        return (
            <input className="title"
                   type="text"
                   name="title"
                   placeholder="Text"
                   value={this.props.title}
                   onChange={this.props.onChange} />
        )
    }
}