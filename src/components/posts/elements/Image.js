import React from 'react';
import Dropzone from 'react-dropzone';

export default ({ onImageAdded, onImageDeleted, isEdit, image, orderInTemplate }) => {
    const onImageDeletedHandler = (event) => {
        onImageDeleted(image);
        event.preventDefault();
    };
    let imageContainer =
        image && image.url && <div className="image-wrapper">
            <img src={image.url}
                alt={image.imageName}
                className="image" />
        </div>;

    return (
        <div className="image-container">
            {isEdit && image && image.url && <div className="button delete-image" onClick={onImageDeletedHandler}>&#10005;</div>}
            {isEdit ?
                <Dropzone className="drop-zone" onDrop={(files) => { onImageAdded(files[0], orderInTemplate); }}>
                    {image && image.url ? imageContainer : <div className="text fill">Click to upload image or drop files here</div>}
                </Dropzone> :
                imageContainer
            }
        </div>
    );
}