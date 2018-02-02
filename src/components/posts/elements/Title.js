import React, {Component} from 'react';

import ContentEditable from 'react-contenteditable';

export default class Title extends Component {

    render() {
        return (
            <ContentEditable
                className="text"
                html={this.props.title}             // innerHTML of the editable div
                disabled={false}                    // use true to disable edition
                onChange={this.props.onChange}      // handle innerHTML change
                key="title"
            />
        )
    }
}