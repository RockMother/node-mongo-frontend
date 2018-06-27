import React from 'react';

import ContentEditable from 'react-contenteditable';

export default ({text, onTextChanged}) => {
    return (
        <ContentEditable
            className="text"
            html={(text && text.text) || ''}
            disabled={false}
            onChange={(event) => { onTextChanged(event.target.value); }}
            placeholder="Some text"
        />
    );
};
