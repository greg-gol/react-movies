import React, { Component } from 'react';

export default class MovieItem extends Component {

    render() {
        const { movieData } = this.props;

        return (
            <tr className="moviesList__movieItem">
                <td>{ movieData.Title }</td>
                <td>{ movieData.Year }</td>
            </tr>
        );
    }
}