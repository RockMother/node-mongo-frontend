import React from 'react';
import { getElementDescriptors } from './../../services/blockEementsFactory';
import templateParserService from '../../services/templateParserService';

export default ({ onValueChanged, isEdit, model, template }) => {
    function checkNodeForReactElement(node) {
        return getElementDescriptors().find(e => node.className.indexOf(e.selector) >= 0 );
    }

    function getInitiallValue(descriptor, model, context) {
        if (model[descriptor.modelName]) {
            const value = model[descriptor.modelName];
            if (value instanceof Array) {
                const index = context.propertyIndexes[descriptor.name];
                return value.length > index? value[index]: null;
            }
            return value;
        }
    }

    function getReactElement(node, context) {
        const childDescriptor = checkNodeForReactElement(node);
        if (node.children.length === 0 || childDescriptor) {
            let child = null;
            if (childDescriptor) {
                child = childDescriptor.factory(context, node, getInitiallValue(childDescriptor, model, context), onValueChanged, isEdit)
            }
            // if (node.className.indexOf('template-image') >= 0) {
            //     child = getImageElement(context, node, images.length > context.imageIndex ? images[context.imageIndex] : null, isEdit, onImageAdded, onImageDeleted);
            // } else if (node.className.indexOf('template-title') >= 0) {
            //     child = getTitleComponent(context, node, title, onValueChanged);
            // }
            // else if (node.className.indexOf('template-code') >= 0) {
            //     child = getCodeComponent(context, node, code, onValueChanged);
            // } else if (node.className.indexOf('template-text') >= 0) {
            //     child = getTextComponent(context, node, texts.length > context.textIndex ? texts[context.textIndex] : null, onTextChanged);
            // }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, child ? [child] : undefined);
        } else {
            const children = [];
            for (let i = 0; i < node.children.length; i++) {
                children.push(getReactElement(node.children[i], context));
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, children);
        }
    }

    const propertyIndexes = {}
    getElementDescriptors().forEach(e => {
        propertyIndexes[e.name] = 0;
    });
    const doc = templateParserService.parse(template.template);
    return (
        
        getReactElement(doc.body.children[0], { propertyIndexes })
    );
}