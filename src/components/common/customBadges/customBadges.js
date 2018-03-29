import React, { Component } from 'react';

import './customBadges.scss';


export default class CustomBadge extends Component {

    render() {
        const {options} = this.props;
        const badge = (            
            <div className={this.props.action ? "customBadge" : "customBadge customBadge--noAction"}>
                <span 
                    className={options.className ? options.className : 'badge badge-pill badge-primary'}
                    onClick={this.props.action ? this.props.action : null}>
                    {options.label}
                </span>
            </div>);

        return options.label ? badge : null;
    }
}