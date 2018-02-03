import React, {Component} from 'react';
import '../Post.css';

import config from '../../../config';

export default class Images extends Component {

    onDrop(files) {
        console.log(files);

        let post = this.state.post;
        post.files =  files;
        this.setState({post: post});
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

{/*<Dropzone className="drop" onDrop={this.onDrop.bind(this)}>*/}
{/*<div className="title">Drop images here</div>*/}
{/*<Images images={this.state.post.images}/>*/}
{/*</Dropzone>*/}

