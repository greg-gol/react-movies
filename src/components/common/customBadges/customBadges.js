import React, { Component } from 'react';

import './customBadges.scss';

export default class CustomBadges extends Component {

    render() {
        const { options } = this.props; 

        return (
            <span 
                className={options.className ? options.className : 'badge badge-pill badge-primary'}
                onClick={options.action ? options.action : () => {}}>
                {options.label}
            </span>
        );
    }
}