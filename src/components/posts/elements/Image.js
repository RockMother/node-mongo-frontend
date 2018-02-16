import React from 'react';
import Dropzone from 'react-dropzone';
import './Image.css';

export default ({ onImageAdded, isEdit, image }) => {
    let imagesContainer = <div className="uploaded-images">
        {image && <div className="image-wrapper">
                <img src={image.url}
                    alt={image.imageName}
                    className="image" />
            </div>
        }
    </div>;

    return (
        <div className="images">
            {isEdit ?
                <Dropzone className="drop-zone" onDrop={(files) => { onImageAdded(files[0]); }}>
                    {image? imagesContainer : <div className="text">Image</div>}
                </Dropzone> :
                imagesContainer
            }
        </div>
    );
}