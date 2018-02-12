import React, { Component } from 'react';
import './TemplateButton.css';

export default class TemplateButton extends Component {
    constructor(props) {
        super(props);
        this.templateClicked = this.templateClicked.bind(this);
    }

    templateClicked() {
        this.props.clicked(this.props.template);
    }

    render() {
        return (
            <div className={`template-button ${this.props.selected ? 'edit' : ''}`}
                 onClick={this.templateClicked}
                 dangerouslySetInnerHTML={{__html: this.props.template.template}}/>
        );
    }
}