import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Images from './elements/Images';
import Title from './elements/Title';

export default class PostTemplate extends Component {
    constructor(props) {
        super(props);
    }

    getReactElement(node) {
        if (node.children.length === 0) {
            let child = null;
            if (node.className.indexOf('template-image') >= 0) {
                child = React.createElement(Images, {
                    images: this.props.images,
                    className: node.className,
                    isEdit: this.props.isEdit,
                    imageAdded: (image) => { this.props.imageAdded(image); }
                });
            } else if (node.className.indexOf('template-title') >= 0) {
                child = React.createElement(Title, {
                    title: this.props.title,
                    className: node.className,
                    onChange: (event) => { this.props.titleChanged(event.target.value); }
                });
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className }, child ? [child] : undefined);
        } else {
            const children = [];
            for (let i = 0; i < node.children.length; i++) {
                children.push(this.getReactElement(node.children[i]));
            }
            return React.createElement(node.nodeName.toLowerCase(), { className: node.className }, children);
        }
    }

    render() {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.props.template.template, "text/html");
        return (
            this.getReactElement(doc.body.children[0])
        );
    }
}