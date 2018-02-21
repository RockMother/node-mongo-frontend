import React from 'react';
import Image from './../components/posts/elements/Image';
import Title from './../components/posts/elements/Title';
import Code from './../components/posts/elements/Code';

export function getImageElement(context, node, image, isEdit, onImageAdded) {
    return React.createElement(Image, {
        orderInTemplate: context.imageIndex,
        key: context.imageIndex++,
        image: image,
        className: node.className,
        isEdit: isEdit,
        onImageAdded: onImageAdded
    });
}

export function getTitleComponent(context, node, title, onTitleChanged) {
    return React.createElement(Title, {
        key: context.titleIndex++,
        title: title,
        className: node.className,
        onChange: onTitleChanged
    });
}

export function getCodeComponent(context, node, code, onCodeChanged) {
    return React.createElement(Code, {
        key: context.codeIndex++,
        code: code,
        className: node.className,
        onCodeChanged: onCodeChanged
    });
}