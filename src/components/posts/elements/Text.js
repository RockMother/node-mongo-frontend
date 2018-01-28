import React, {Component} from 'react';
import '../Post.css';

export default class Text extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            this.props.texts && this.props.texts.length > 0 ? <div className="text">
                {this.props.texts.map(text => <div className="">{text.text}</div>)}
            </div> : ''
        )
    }
}