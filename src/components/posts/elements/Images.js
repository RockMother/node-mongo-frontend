import React, { Component } from 'react';
import '../Post.css';
import Dropzone from 'react-dropzone';
import './Images.css';

import config from '../../../config';

export default class Images extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            images: this.getInitialState(this.props)
        }
    }

    getInitialState(props){
        const images = [];
        props.images.forEach((image, index) => {
            images.push({
                url: config.API_URL + '/image/' + image.imageId,
                imageName: image.imageName
            });
        });
        return images;
    }

    onDrop(files) {
        this.setState({
            images: this.state.images.concat({
                imageName: files[0].name,
                url: files[0].preview
            })
        });
        this.props.imageAdded(files[0]);
    }

    componentWillReceiveProps(newProps) {
        this.setState({images: this.getInitialState(newProps)});
    }

    render() {
        let dropZone = '';
        if (this.props.isEdit) {
            dropZone =
                <Dropzone className="drop-zone" onDrop={this.onDrop}>
                    <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>;
        }

        return (
            <div className="images">
                {dropZone}
                <div className="uploaded-images">
                    {this.state.images ? this.state.images.map((image, index) =>
                        <div className="image-wrapper" key={index}>
                            <img src={image.url}
                                alt={image.imageName}
                                className="image" />
                        </div>
                    ) : ''}
                </div>
            </div>
        )
    }
}

// {/*<Dropzone className="drop" onDrop={this.onDrop.bind(this)}>*/}
// {/*<div className="title">Drop images here</div>*/}
// {/*<Images images={this.state.post.images}/>*/}
// {/*</Dropzone>*/}

