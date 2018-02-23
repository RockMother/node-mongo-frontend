import React from 'react';
import { getImageElement, getTitleComponent, getCodeComponent } from './../../services/postEementsFactory';
import templateParserService from '../../services/templateParserService';

export default ({ onTitleChanged, onImageAdded, onImageDeleted, onCodeChanged, isEdit, images, title, code, template }) => {
    function checkNodeForReactElement(node) {
        const className = node.className;
        return className.indexOf('template-image') >= 0 ||
            className.indexOf('template-title') >= 0 ||
            className.indexOf('template-code') >= 0;
    }

    function getReactElement(node, context) {
        if (node.children.length === 0 || checkNodeForReactElement(node)) {
            let child = null;
            if (node.className.indexOf('template-image') >= 0) {
                child = getImageElement(context, node, images.length > context.imageIndex ? images[context.imageIndex] : null, isEdit, onImageAdded, onImageDeleted);
            } else if (node.className.indexOf('template-title') >= 0) {
                child = getTitleComponent(context, node, title, onTitleChanged);
            }
            else if (node.className.indexOf('template-code') >= 0) {
                child = getCodeComponent(context, node, code, onCodeChanged);
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, child ? [child] : undefined);
        } else {
            const children = [];
            for (let i = 0; i < node.children.length; i++) {
                children.push(getReactElement(node.children[i], context));
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, children);
        }
    }
    const doc = templateParserService.parse(template.template);
    return (
        getReactElement(doc.body.children[0], { divIndex: 0, imageIndex: 0, titleIndex: 0, codeIndex: 0 })
    );
}