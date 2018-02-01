import React, {Component} from 'react';
import '../Post.css';

export default class Comments extends Component {
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