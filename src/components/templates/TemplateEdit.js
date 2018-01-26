import React, { Component } from 'react';
import HtmlViewer from './../common/htmlViewer/HtmlViewer';

export default class TemplateEdit extends Component {
    constructor(props) {
        super(props);
        this.saveTemplate = this.saveTemplate.bind(this);
        this.state = {
            title: this.props.title,
            template: this.props.template
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.templateChanged = this.templateChanged.bind(this);
        this.saveTemplate = this.saveTemplate.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    saveTemplate() {
        this.props.saveTemplateClicked({
            _id: this.props.id,
            title: this.state.title,
            template: this.state.template
        });
    }

    cancelEdit() {
        this.props.cancelEditClicked();
    }

    titleChanged(event) {
        this.setState({ title: event.target.value });
    }

    templateChanged(updatedTemplate) {
        this.setState({ template: updatedTemplate });
    }

    render() {
        return (
            <div className="card col-12" style={{ 'maxWidth': '40rem' }}>
                <div className="card-header row no-gutters">
                    <div className="col-11">{this.props.title}</div>
                    <div className="col-1">
                        <div className="row no-gutters justify-content-end">
                            <div className="col-6">
                                <button className="icon-button" onClick={this.saveTemplate}>
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="icon-button" onClick={this.cancelEdit}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.titleChanged} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="template">Title</label>
                        <HtmlViewer className="form-control" id="template" value={this.state.template} onChange={this.templateChanged} />
                    </div>
                </div>
            </div>
        );
    }
}