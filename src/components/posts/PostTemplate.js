import React, { Component } from 'react';
import Images from './elements/Images';
import Title from './elements/Title';
import Code from './elements/Code';

export default class PostTemplate extends Component {
    constructor(props){
        super(props);
        this.onImageAdded = ((image) => {
            this.props.onImageAdded(image);
        }).bind(this);
    }

    getReactElement(node, context) {
        if (!node) {
            debugger;
        }
        if (node.children.length === 0) {
            let child = null;
            if (node.className.indexOf('template-image') >= 0) {
                child = React.createElement(Images, {
                    key: context.imageIndex++,
                    images: this.props.images,
                    className: node.className,
                    isEdit: this.props.isEdit,
                    onImageAdded: this.onImageAdded
                });
            } else if (node.className.indexOf('template-title') >= 0) {
                child = React.createElement(Title, {
                    key: context.titleIndex++,
                    title: this.props.title,
                    className: node.className,
                    onChange: (event) => { this.props.onTitleChanged(event.target.value); }
                });
            }
            else if (node.className.indexOf('template-code') >= 0) {
                child = React.createElement(Code, {
                    key: context.titleIndex++,
                    code: this.props.code,
                    className: node.className,
                    onChange: (code) => { this.props.onCodeChanged(code); }
                });
            }            
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, child ? [child] : undefined);
        } else {
            const children = [];
            for (let i = 0; i < node.children.length; i++) {
                children.push(this.getReactElement(node.children[i], context));
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className, key: context.divIndex++ }, children);
        }
    }

    render() {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.props.template.template, "text/html");
        return (
            this.getReactElement(doc.body.children[0], { divIndex: 0, imageIndex: 0, titleIndex: 0 })
        );
    }
}