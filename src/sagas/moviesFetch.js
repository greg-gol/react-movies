import {call, put, select, takeEvery } from 'redux-saga/effects';

import serverApi from '../api/serverApi';
import {populateMovies} from '../actions/movies';
import {ActionTypes, API_PARAMS} from '../common/constants';


const getStoredMovies = state => state.storedMovies;

export function* fetchMovies(action) {
  try {
    const storedMovies = yield select(getStoredMovies);
    let movies = {};

    movies.Search = storedMovies.map(movie => {
      if (movie.Title.includes(action.payload[API_PARAMS.SEARCH]) || action.payload[API_PARAMS.SEARCH].includes(movie.Title)) {
        return movie;
      }
    });

    if (!movies.Search[0] || movies.Search.length === 0) {
      movies = yield call(serverApi.getMovies, action.payload);
    }

    yield put(populateMovies(movies));
  } catch (error) {
    console.error(error);
  }
}

export function* watchMovies() {
  yield takeEvery(ActionTypes.FETCH_MOVIES, fetchMovies);
}