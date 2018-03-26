import {ActionTypes} from "../common/constants";

export const fetchMovieById = (movie) => {
  return {
    type: ActionTypes.FETCH_MOVIE_BY_ID,
    payload: movie
  }
}

export const populateMovieById = (movie) => {
  return {
    type: ActionTypes.POPULATE_MOVIE_BY_ID,
    payload: movie
  }
}