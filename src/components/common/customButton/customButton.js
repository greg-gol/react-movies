import React, { Component } from 'react';

import './customButton.scss';

export default class CustomButton extends Component {

    render() {
        const { options } = this.props; 

        return (
            <a 
                href={ options.url ? options.url : '#' } 
                rel={ options.rel ? options.rel : 'nofollow' } 
                target={ options.target ? options.target : '_self' } 
                className={ options.className ? options.className : 'btn btn-primary' }
                onClick={ options.action ? (e) => {
                    e.preventDefault();

                    if (options.action.param) {    
                        options.action.actionMethod(options.action.param);
                    } else {
                        options.action.actionMethod();
                    }
                } : () => {} }>
                { options.label ? options.label : '' }
            </a>
        );
    }
}