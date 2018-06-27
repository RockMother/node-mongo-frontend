import React, { Component } from 'react';

import templateParserService from '../../services/templateParserService';
import BlockTemplate from './BlockTemplate';

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
    }

    getInitialState(props) {
        const {template, model} = props;
        return {
            model: JSON.parse(JSON.stringify(model)),
            templateProperties: templateParserService.getProperties(template)
        }
    }

    render() {
        const { model } = this.state;
        const { isEdit, template } = this.props;
        let blockTemplate = null;
        if (template) {
            blockTemplate = React.createElement(BlockTemplate, { template, isEdit, model, onValueChanged: () => console.log(arguments)});
        }
        return (
            <div className="paper" onClick={this.props.onClick}>
                { blockTemplate }
            </div>
        );
    }
}
export default Block;