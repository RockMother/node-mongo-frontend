import React, {Component} from 'react';

// import Post from '../posts/Post';

import TemplateView from './TemplateView';
import TemplateEdit from './TemplateEdit';
import TemplateActions from './../../actions/templateActions';

export default class Template extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isEdit: false
        };

        this.isEdit = this.isEdit.bind(this);
    }

    isEdit() {
        this.setState({isEdit: !this.state.isEdit})
    }

    render() {

        return (

            this.state.isEdit === false ?
                <TemplateView key={this.props.template.id} template={this.props.template} isEdit={this.isEdit}/> :
                <TemplateEdit key={this.props.template.id} template={this.props.template} isEdit={this.isEdit} />
        )
    }
}