import React, {Component} from 'react';

export default class Appender extends Component {

    // Element thet add other elements (Experimental)

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <input className="appender"
                   type="text"
                   name="title"
                   placeholder="Add element here"
                   value={this.props.title}
                   onChange={this.props.onChange} />
        )
    }
}