import React from 'react';
import './TemplateButton.css';

export default ({onTemplateClicked, selected, template}) => {
    return (
        <div className={`template-button ${selected ? 'selected' : ''}`}
            onClick={() => { onTemplateClicked(template); }}
             dangerouslySetInnerHTML={{__html: template.template}}/>
    );
}