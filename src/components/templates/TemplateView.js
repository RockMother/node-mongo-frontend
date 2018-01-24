import React, { Component } from 'react';
import HtmlViewer from './../common/htmlViewer/HtmlViewer'

export default class TemplateView extends Component {
    constructor(props) {
        super(props);
        this.editTemplate = this.editTemplate.bind(this);
    }

    editTemplate() {
        this.props.editTemplateClicked();
    }

    render() {
        const options = {
            readOnly: true, 
            lineWrapping: true
        };
        return (
            <div className="card col-12" style={{ 'maxWidth': '40rem' }}>
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    <HtmlViewer className="card-text" value={this.props.template} options={options}></HtmlViewer>
                    <a href="#" className="btn btn-link" onClick={this.editTemplate}>Edit</a>
                </div>
            </div>
        );
    }
}