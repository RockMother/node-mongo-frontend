import React, { Component } from 'react';
import Images from './elements/Images';
import Title from './elements/Title';
import Code from './elements/Code';

export default ({onTitleChanged, onImageAdded, onCodeChanged, isEdit, images, title, code, template}) => {
    function getReactElement(node, context) {
        if (!node) {
            debugger;
        }
        if (node.children.length === 0) {
            let child = null;
            if (node.className.indexOf('template-image') >= 0) {
                child = React.createElement(Images, {
                    key: context.imageIndex++,
                    images: images,
                    className: node.className,
                    isEdit: isEdit,
                    onImageAdded: onImageAdded
                });
            } else if (node.className.indexOf('template-title') >= 0) {
                child = React.createElement(Title, {
                    key: context.titleIndex++,
                    title: title,
                    className: node.className,
                    onChange: onTitleChanged
                });
            }
            else if (node.className.indexOf('template-code') >= 0) {
                child = React.createElement(Code, {
                    key: context.titleIndex++,
                    code: code,
                    className: node.className,
                    onChange: onCodeChanged
                });
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
        getReactElement(doc.body.children[0], { divIndex: 0, imageIndex: 0, titleIndex: 0 })
    );
}