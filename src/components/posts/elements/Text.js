import React, {Component} from 'react';
import '../Post.css';

import ContentEditable from 'react-contenteditable';

export default class Text extends Component {
    render(){
        return (
            this.props.texts && this.props.texts.length > 0 ? this.props.texts.map(text =>
                                                <ContentEditable
                                                    className="text"
                                                    html={text.text}             // innerHTML of the editable div
                                                    disabled={false}                    // use true to disable edition
                                                    onChange={this.props.onChange}      // handle innerHTML change
                                                    key={text._id} />)
             : ''
        )
    }
}