import React from 'react';
import Image from './../components/posts/elements/Image';
import Title from './../components/posts/elements/Title';
import Code from './../components/posts/elements/Code';
import Text from './../components/posts/elements/Text';

export function getImageElement(context, node, image, isEdit, onImageAdded, onImageDeleted) {
    return React.createElement(Image, {
        orderInTemplate: context.imageIndex,
        key: context.imageIndex++,
        image,
        className: node.className,
        isEdit,
        onImageAdded,
        onImageDeleted
    });
}

export function getTitleComponent(context, node, title, onTitleChanged) {
    return React.createElement(Title, {
        key: context.titleIndex++,
        title,
        className: node.className,
        onChange: onTitleChanged
    });
}

export function getCodeComponent(context, node, code, onCodeChanged) {
    return React.createElement(Code, {
        key: context.codeIndex++,
        code,
        className: node.className,
        onCodeChanged
    });
}

export function getTextComponent(context, node, text, onTextChanged) {
    return React.createElement(Text, {
        key: context.textIndex++,
        text,
        className: node.className,
        onTextChanged
    });
}