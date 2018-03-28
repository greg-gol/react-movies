import React, { Component } from 'react';

import './customButton.scss';

export default class CustomButton extends Component {
    handleClick = (e) => {
        const { options } = this.props; 
        e.preventDefault();
        
        if (options.action.param)    {
            options.action.method(options.action.param);
        } else {
            options.action.method();
        }
    }

    render() {
        const { options } = this.props; 
        const button = (
            <button 
                className={ options.className ? options.className : 'btn btn-primary' }
                onClick={ options.action ? this.handleClick : null }>
                {options.label}
            </button>
        );
        
        return options.label ? button : null;
    }
}