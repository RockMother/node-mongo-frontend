import React from 'react';
import './Code.css'

import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/neat.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'

export default ({ code, onCodeChanged }) => {
    return (
        <CodeMirror
            className="code"
            value={code}
            autoCursor={false}
            options={{
                lineWrapping: true,
                mode: 'text/html',
                theme: 'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
                //TODO fix position reset
                onCodeChanged(value);
            }}
        />
    );
}
