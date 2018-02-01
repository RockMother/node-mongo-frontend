import React, {Component} from 'react';
import '../Post.css';

export default class Text extends Component {
    render(){
        return (
            this.props.texts && this.props.texts.length > 0 ? <div className="text">

                {this.props.texts.map(text => <div className=""
                                                   key={text._id}>{text.text}</div>)}
            </div> : ''
        )
    }
}