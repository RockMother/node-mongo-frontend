import React from 'react';
import Image from './../components/posts/elements/Image';
import Title from './../components/posts/elements/Title';
import Code from './../components/posts/elements/Code';
import Text from './../components/posts/elements/Text';

const image = { 
    name: 'Image', 
    modelName: 'images',
    selector: 'template-image', 
    factory (context, node, initialValue, onValueChanged, isEdit) {
        const key = context.propertyIndexes[image.name]++;
        return React.createElement(Image, {
            key: key,
            image: initialValue,
            className: node.className,
            isEdit,
            onImageAdded: (image) => onValueChanged(image, key),
            onImageDeleted: () => onValueChanged(null, key)
        });
    } 
};
const text = { 
    name: 'Text', 
    modelName: 'texts',
    selector: 'template-text', 
    factory (context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[text.name]++;
        return React.createElement(Text, {
            key: key,
            text: initialValue,
            className: node.className,
            onTextChanged: (text) => onValueChanged(text, key)
        });
    } 
};
const code = {
    name: 'Code', 
    modelName: 'code',
    selector: 'template-code',
     factory(context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[code.name]++;
        return React.createElement(Code, {
            key: key,
            code: initialValue,
            className: node.className,
            onCodeChanged: (value) => onValueChanged(value, key)
        });
    }
}     
const title = {
    name: 'Title', 
    modelName: 'title',
    selector: 'template-title', 
    factory(context, node, initialValue, onValueChanged) {
        const key = context.propertyIndexes[title.name]++;
        return React.createElement(Title, {
            key: context.propertyIndexes[title.name]++,
            title: initialValue,
            className: node.className,
            onChange: (value) => onValueChanged(value, key)
        });
    }
};

export function getElementDescriptors() {
    return [image, text, code, title];
}