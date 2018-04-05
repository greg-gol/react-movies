import {ActionTypes} from "../common/constants";

export const fetchMovies = (options) => {
  return {
    type: ActionTypes.FETCH_MOVIES,
    payload: options
  }
}

export const populateMovies = (movies) => {
  return {
    type: ActionTypes.POPULATE_MOVIES,
    payload: movies
  }
}