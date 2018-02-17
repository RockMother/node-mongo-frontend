import React from 'react';
import { getImageElement, getTitleComponent, getCodeComponent } from './../../services/postEementsFactory';

export default ({ onTitleChanged, onImageAdded, onCodeChanged, isEdit, images, title, code, template }) => {
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
                child = getImageElement(context, node, images.length > 0 ? images[0] : null, isEdit, onImageAdded);
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
    const parser = new DOMParser();
    const doc = parser.parseFromString(template.template, "text/html");
    return (
        getReactElement(doc.body.children[0], { divIndex: 0, imageIndex: 0, titleIndex: 0, codeIndex: 0 })
    );
}