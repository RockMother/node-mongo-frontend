import React, { Component } from 'react';
import '../Post.css';
import Dropzone from 'react-dropzone';
import './Images.css';

export default ({ onImageAdded, isEdit, images }) => {
    let imagesList = <div className="uploaded-images">
        {images ? images.map((image, index) =>
            <div className="image-wrapper" key={index}>
                <img src={image.url}
                    alt={image.imageName}
                    className="image" />
            </div>
        ) : ''}
    </div>;

    return (
        <div className="images">
            {isEdit ?
                <Dropzone className="drop-zone" onDrop={(files) => { onImageAdded(files[0]); }}>
                    {images.length === 0 ? <div className="text">Image</div> : imagesList}
                </Dropzone> :
                imagesList
            }
        </div>
    );
}