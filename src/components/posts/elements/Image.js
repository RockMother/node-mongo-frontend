import React from 'react';
import Dropzone from 'react-dropzone';
import './Image.css';

export default ({ onImageAdded, isEdit, image }) => {
    let imageContainer = <div className="uploaded-images">
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
                    {image? imageContainer : <div className="text">Image</div>}
                </Dropzone> :
                imageContainer
            }
        </div>
    );
}