import {call, put, takeEvery } from 'redux-saga/effects';

import serverApi from '../api/serverApi';
import {populateMovieById} from '../actions/movieById';
import {ActionTypes} from '../common/constants';

export function* fetchMovieById(action) {
  try {
    const movie = yield call(serverApi.getMovies, action.payload);
    yield put(populateMovieById(movie));
  } catch (error) {
    console.error(error);
  }
}

export function* watchMovieById() {
  yield takeEvery(ActionTypes.FETCH_MOVIE_BY_ID, fetchMovieById);
}