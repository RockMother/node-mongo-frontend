import React, { Component } from 'react';
import HtmlViewer from './../common/htmlViewer/HtmlViewer'

import Code from './../posts/elements/Code';

export default class TemplateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseHovering: false
        }

        this.editTemplate = this.editTemplate.bind(this);
        this.mouseEnter = this.mouseHover.bind(this, true);
        this.mouseLeave = this.mouseHover.bind(this, false);
    }

    mouseHover(enter) {
        this.setState({
            mouseHovering: enter
        });
    }

    editTemplate() {
        this.props.template.editTemplateClicked();
    }

    render() {
        const options = {
            readOnly: true,
            lineWrapping: true
        };
        return (

            <div className="block" onClick={this.editTemplate}>

                <div className="text">

                    <div>{this.props.template.title}</div>

                </div>

                <Code code={this.props.template.template} />
            </div>

        );
    }
}