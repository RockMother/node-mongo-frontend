import React, { Component } from 'react';
import Form from '../form/Form'
import Links from './../form/Links'

export default class AuthForm extends Component {
    render() {
        const {title, primaryButtonValue, fields, onSubmitClicked, links } = this.state;
        return (
            <div className="auth-form">
                <div className="title">{title}</div>
                <Form isVertical={true}
                    primaryButtonValue={primaryButtonValue}
                    fields={fields}
                    onSubmitClicked={onSubmitClicked}>
                </Form>
                <Links links={links}>
                </Links>
            </div>
        );
    }
}