import React from 'react';
import BlockTemplate from './BlockTemplate';

export default ({ isEdit, template, model, onClick, modelChanged }) => {
    let blockTemplate = null;
    if (template) {
        blockTemplate = React.createElement(BlockTemplate, { template, isEdit, model, modelChanged });
    }
    return (
        <div className="block-template" onClick={onClick}>
            {blockTemplate}
        </div>
    );
};