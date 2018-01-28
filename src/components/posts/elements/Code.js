import React, {Component} from 'react';

export default class Images extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="code">
                {this.props.code}
            </div>
        )
    }
}