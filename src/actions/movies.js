import {ActionTypes} from "../common/constants";

export const fetchMovies = () => {
  return {
    type: ActionTypes.FETCH_MOVIES
  }
}

export const populateMovies = (movies) => {
  return {
    type: ActionTypes.POPULATE_MOVIES,
    payload: {
      movies
    }
  }
}