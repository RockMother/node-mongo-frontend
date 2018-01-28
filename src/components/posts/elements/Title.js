import React, {Component} from 'react';

export default class Title extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <input className="title"
                   type="text"
                   name="title"
                   placeholder="Some title here please"
                   value={this.props.title}
                   onChange={this.props.onChange} />
        )
    }
}