import React, {Component} from 'react';

import config from '../../config';

export default class Images extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            this.props.images.map(image =>
                <img src={config.API_URL + '/image/' + image.imageId}
                     key={image._id} />
            )
        )
    }
}