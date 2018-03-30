import React from 'react';
import { connect } from 'react-redux';

import MovieItem from '../movieItem';
import './moviesList.scss';

function MoviesList(props) {
    const { movies } = props;

    if (movies && movies.Search) {
        return (
            <div className="moviesList">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.Search.map(movie => <MovieItem history={props.history} movieData={movie} key={movie.imdbID}/>)
                        }
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div>No movies found</div>
        );
    }
}

function mapStateToProps(state) {
    const { movies } = state;

    return {
        movies
    }
}

export default connect(mapStateToProps, null)(MoviesList);