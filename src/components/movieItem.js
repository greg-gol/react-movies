import React, { Component } from 'react';


export default class MovieItem extends Component {

    render() {
        const { movieData } = this.props;

        return (
            <div className="movieitem-wrapper">
                <span>Title: { movieData.Title }</span>
                <span>Year: { movieData.Year }</span>
            </div>
        );
    }
}