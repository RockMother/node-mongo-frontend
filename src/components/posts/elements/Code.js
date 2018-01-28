import React, {Component} from 'react';

import {UnControlled as CodeMirror} from 'react-codemirror2';

require('../../../../node_modules/codemirror/lib/codemirror.css');
require('../../../../node_modules/codemirror/theme/material.css');
require('../../../../node_modules/codemirror/theme/neat.css');
require('../../../../node_modules/codemirror/mode/htmlmixed/htmlmixed.js');
require('../../../../node_modules/codemirror/mode/javascript/javascript.js');


export default class Code extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.code,
        };
    }

    render() {
        return (
            <div className="code">
                <CodeMirror
                    value={this.state.value}
                    options={{
                        lineWrapping: true,
                        mode: 'text/html',
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </div>
        )
    }
}