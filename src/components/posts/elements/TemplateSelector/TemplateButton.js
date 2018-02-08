import React, { Component } from 'react';
import './TemplateButton.css';

export default class TemplateButton extends Component {
    render() {
        return (
            <div className="template-button" dangerouslySetInnerHTML={{__html: this.props.template.template}}></div>
        );
    }
}