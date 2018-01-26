import React, { Component } from 'react';
import HtmlViewer from './../common/htmlViewer/HtmlViewer'

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
        this.props.editTemplateClicked();
    }

    render() {
        const options = {
            readOnly: true,
            lineWrapping: true
        };
        return (
            <div className="card col-12" style={{ 'maxWidth': '40rem' }}>
                <div className="card-header row no-gutters" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <div className="col-11">{this.props.title}</div>
                    <div className="col-1">
                        {
                            this.state.mouseHovering ?
                                <div className="row no-gutters justify-content-end">
                                    <button className="icon-button" onClick={this.editTemplate}>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </button>
                                </div>
                                : null
                        }
                    </div>
                </div>
                <div className="card-body">
                    <HtmlViewer className="card-text" value={this.props.template} options={options}></HtmlViewer>
                </div>
            </div>
        );
    }
}