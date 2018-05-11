import React from 'react';

import ContentEditable from 'react-contenteditable';

export default ({text, onTextChanged}) => {
    const onChangeHandler = (event) => {
        onTextChanged(event.target.value, text.orderInTemplate);
    }
    return (
        <ContentEditable
            className="text"
            html={'' || text.text}
            disabled={false}
            onChange={onChangeHandler}
            placeholder="Some text"
        />
    );
};
