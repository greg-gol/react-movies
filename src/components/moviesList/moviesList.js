import React, {Component} from 'react';
import { connect } from 'react-redux';

import {API_PARAMS} from '../../common/constants';
import MovieItem from '../movieItem';

import './moviesList.scss';

const {MOVIE_DETAILS} = API_PARAMS;


class MoviesList extends Component {

    render() {
        const {movies} = this.props;

        if (movies.Search) {
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
                                movies.Search.map((movie, index) => <MovieItem history={this.props.history} movieData={movie} key={movie[MOVIE_DETAILS.ID]}/>)
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
}

function mapStateToProps(state) {
    const { movies } = state;

    return {
        movies
    }
}

export default connect(mapStateToProps, null)(MoviesList);