import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieItem extends Component {

    render() {
        const { movieData } = this.props;

        return (
            <tr className="moviesList__movieItem">
                <td>
                    <Link to={`/movie-details/${ movieData.imdbID }`}>{ movieData.Title }</Link>
                </td>
                <td>{ movieData.Year }</td>
            </tr>
        );
    }
}