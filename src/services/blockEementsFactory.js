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
        return React.createElement(Image, {
            orderInTemplate: context.imageIndex,
            key: context.propertyIndexes[image.name]++,
            image: initialValue,
            className: node.className,
            isEdit,
            onImageAdded: onValueChanged,
            onImageDeleted: onValueChanged
        });
    } 
};
const text = { 
    name: 'Text', 
    modelName: 'texts',
    selector: 'template-text', 
    factory (context, node, initialValue, onValueChanged) {
        return React.createElement(Text, {
            key: context.propertyIndexes[text.name]++,
            text: initialValue,
            className: node.className,
            onTextChanged: onValueChanged
        });
    } 
};
const code = {
    name: 'Code', 
    modelName: 'code',
    selector: 'template-code',
     factory(context, node, initialValue, onValueChanged) {
        return React.createElement(Code, {
            key: context.propertyIndexes[code.Name]++,
            code: initialValue,
            className: node.className,
            onCodeChanged: onValueChanged
        });
    }
}     
const title = {
    name: 'Title', 
    modelName: 'title',
    selector: 'template-title', 
    factory(context, node, initialValue, onValueChanged) {
        return React.createElement(Title, {
            key: context.propertyIndexes[title.name]++,
            title: initialValue,
            className: node.className,
            onChange: onValueChanged
        });
    }
};

export function getElementDescriptors() {
    return [image, text, code, title];
}