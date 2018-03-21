import React, { Component } from 'react';


export default class MovieItem extends Component {

    render() {
        const { movieData } = this.props;

        return (
            <div className="movieitem-wrapper">
                <p>{ movieData.Title }</p>
                <p>{ movieData.Year }</p>
            </div>
        );
    }
}