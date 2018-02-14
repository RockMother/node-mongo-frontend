import React, {Component} from 'react';
import './Buttons.css';

export default class Buttons extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.delete = this.delete.bind(this);
        this.template = this.template.bind(this);
    }

    save() {
        this.props.onSaveClicked();
    }

    cancel() {
        this.props.onCancelClicked();
    }

    delete() {
        this.props.onDeleteClicked();
    }

    template() {
        this.props.onTemplateClicked();
    }

    render(){
        const buttons = [];
        if (this.props.onTemplateClicked)
            buttons.push(<div className="button" onClick={this.template}>Templates</div>);
        if (this.props.onSaveClicked)
            buttons.push(<div className="button green" onClick={this.save}>Save</div>);
        if (this.props.onDeleteClicked)
            buttons.push(<div className="button red" onClick={this.delete}>Delete</div>);
        if (this.props.onCancelClicked)
            buttons.push(<div className="button" onClick={this.cancel}>Cancel</div>);            

        return (
            <div className="buttons">
                {buttons}
            </div>
        )
    }
}


