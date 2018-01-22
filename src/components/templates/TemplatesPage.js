import React, {Component} from 'react';
import TemplateList from './TemplateList';

import templateActions from './../../actions/templateActions';
import templatesStore from './../../stores/templatesStore';

export default class TemplatesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: templatesStore.getTemplates()
        };
    }

    componentDidMount(){
        templateActions.getTemplates();
        templatesStore.addChangeListener(() => this.onChange());
    }
    componentWillUnmount(){
        templatesStore.removeChangeListener(() => this.onChange());
    }
    onChange() {
        this.setState({ templates: templatesStore.getTemplates() });
    }



    render(){
        return (
          <TemplateList className="templates-page" templates={this.state.templates}></TemplateList>  
        );
    }
}

