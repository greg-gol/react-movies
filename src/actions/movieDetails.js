import {ActionTypes} from "../common/constants";

export const fetchMovieDetails = (movie) => {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAILS,
    payload: movie
  }
}

export const populateMovieDetails = (movie) => {
  return {
    type: ActionTypes.POPULATE_MOVIE_DETAILS,
    payload: movie
  }
}