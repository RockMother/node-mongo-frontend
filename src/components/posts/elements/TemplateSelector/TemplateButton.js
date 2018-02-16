import React, { Component } from 'react';
import './TemplateButton.css';

export default ({onTemplateClicked, selected, template}) => {
    return (
        <div className={`template-button ${selected ? 'edit' : ''}`}
            onClick={() => { onTemplateClicked(template); }}
             dangerouslySetInnerHTML={{__html: template.template}}/>
    );
}