import React, {Component} from 'react';

// import Post from '../posts/Post';

import TemplateView from './TemplateView';
import TemplateEdit from './TemplateEdit';

export default class Template extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isEdit: false
        };

        this.setEdit = this.setEdit.bind(this);
    }

    setEdit() {
        if (!this.state.isEdit)
            this.setState({isEdit: !this.state.isEdit});
    }

    render() {

        return (

            !this.state.isEdit ?
                <TemplateView key={this.props.template.id} template={this.props.template} setEdit={this.setEdit}/> :
                <TemplateEdit key={this.props.template.id} template={this.props.template} isEdit={this.isEdit} />
        )
    }
}