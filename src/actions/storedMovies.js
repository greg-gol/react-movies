import {ActionTypes} from "../common/constants";

export const addMovieToStore = (data) => {
  return {
    type: ActionTypes.ADD_MOVIE_TO_STORE,
    payload: data
  }
}

export const populateStoredMovies = (data) => {
  return {
    type: ActionTypes.POPULATE_STORED_MOVIES,
    payload: data
  }
}