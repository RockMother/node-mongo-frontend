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
                <Dropzone className="drop-zone text" onDrop={this.onDrop}>
                    Image
                </Dropzone>;
        }

        let imagesList = <div className="uploaded-images">
            {this.props.images ? this.props.images.map((image, index) =>
                <div className="image-wrapper" key={index}>
                    <img src={image.url}
                         alt={image.imageName}
                         className="image" />
                </div>
            ) : ''}
        </div>;

        return (
            <div className="images">
                {this.props.isEdit ?
                    <Dropzone className="drop-zone" onDrop={this.onDrop}>
                        {this.props.images.length === 0 ? <div className="text">Image</div> : imagesList}
                    </Dropzone> :
                    imagesList
                }
            </div>
        )
    }
}

// {/*<Dropzone className="drop" onDrop={this.onDrop.bind(this)}>*/}
// {/*<div className="title">Drop images here</div>*/}
// {/*<Images images={this.state.post.images}/>*/}
// {/*</Dropzone>*/}

