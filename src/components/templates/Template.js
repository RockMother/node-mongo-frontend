import React, { Component } from 'react';

export default class Template extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="col-8"><span className="title">{this.props.options.title}</span></div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-4 label">
                            <span>Template body</span>
                        </div>
                        <div className="col-8 input">
                            <textarea value={this.props.options.template} />   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}