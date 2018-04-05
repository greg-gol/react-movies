import {ActionTypes} from "../common/constants";

export const fetchMovieDetails = (options) => {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS,
    payload: options
  }
}

export const populateMovieDetails = (movie) => {
  return {
    type: ActionTypes.POPULATE_MOVIE_DETAILS,
    payload: movie
  }
}