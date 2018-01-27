import React, {Component} from 'react';
import '../Post.css';

import config from '../../../config';

export default class Images extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="images">
                {this.props.images.map(image =>

                    <img src={config.API_URL + '/image/' + image.imageId}
                         key={image._id}
                         className="image"/>

                )}
            </div>
        )
    }
}