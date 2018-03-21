import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from './movieItem';

class MoviesList extends Component {

    render() {
        const { movies } = this.props; 

        if(movies.moviesList && movies.moviesList.Search) {
            return (
                <div className="movieslist-item-wrapper">
                    {
                        movies.moviesList.Search.map(movie => <MovieItem movieData={movie} key={movie.imdbID}/>)
                    }
                </div>
            );
        } else {
            return (
                <div className="movieslist-error">No movies found</div>
            );
        }
    }
}

function mapStateToProps(state) {
    const { movies } = state;

    return {
        movies
    }
}

export default connect(mapStateToProps, null)(MoviesList);