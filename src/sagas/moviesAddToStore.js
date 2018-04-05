import {put, takeEvery} from 'redux-saga/effects';

import {populateStoredMovies} from '../actions/storedMovies';
import {ActionTypes, API_PARAMS} from '../common/constants';

export function* addMovieToStore(action) {
  try {
    const mappedMovie = {};

    for(var prop in action.payload) {
      mappedMovie[prop] = action.payload[prop].value;
    }
    
    yield put((populateStoredMovies(mappedMovie)));
  } catch (error) {
    console.error(error);
  }
}

export function* watchMoviesAddToStore() {
  yield takeEvery(ActionTypes.ADD_MOVIE_TO_STORE, addMovieToStore);
}