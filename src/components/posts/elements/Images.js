import React, { Component } from 'react';
import '../Post.css';
import Dropzone from 'react-dropzone';
import './Images.css';



export default class Images extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        this.props.imageAdded(files[0]);
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
                    {this.props.images ? this.props.images.map((image, index) =>
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

