import React, {Component} from 'react';
import TemplateView from './TemplateView';
import TemplateEdit from './TemplateEdit';
import templateActions from './../../actions/templateActions';

export default class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: props.template,
            isEdit: false
        };

        this.state.template.editTemplateClicked = () => {
            this.setState({isEdit: !this.state.isEdit})
        };

        this.editTemplate = this.editTemplate.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.saveTemplate = this.saveTemplate.bind(this);
    }

    editTemplate() {
        this.setState({
            isEdit: true
        });
    }

    saveTemplate(template) {
        this.setState({
            isEdit: false
        });
        templateActions.saveTemplate(template);
    }

    cancelEdit() {
        this.setState({isEdit: false});
    }

    render() {

        return (

            this.state.isEdit === false ?
                <TemplateView key={this.state.template.id} template={this.state.template}/> :
                <TemplateEdit key={this.state.template.id} template={this.state.template}/>
        )
    }
}