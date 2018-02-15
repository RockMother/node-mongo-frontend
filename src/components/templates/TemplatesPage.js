import React, { Component } from 'react';
import TemplateList from './TemplateList';

import * as templateActions from './../../actions/templateActions';

export default class TemplatesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: []
        };
    }

    render() {
        return (
            <TemplateList templates={this.state.templates} />
        );
    }
}

