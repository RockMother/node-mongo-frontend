import React, {Component} from 'react';
import './Buttons.css';

import PostActions from '../../../actions/postActions';

export default class Buttons extends Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.delete = this.delete.bind(this);
    }

    save() {
        this.props.saveClicked();
    }

    cancel() {
        this.props.cancelClicked();
    }

    delete() {
        this.props.deleteClicked();
    }

    render(){
        return (
            <div className="buttons">
                <div className="button green" onClick={this.save}>Save</div>
                <div className="button red" onClick={this.delete}>Delete</div>
                <div className="button" onClick={this.cancel}>Cancel</div>
            </div>
        )
    }
}


