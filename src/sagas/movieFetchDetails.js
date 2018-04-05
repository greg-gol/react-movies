import {call, put, select, takeEvery } from 'redux-saga/effects';

import serverApi from '../api/serverApi';
import {populateMovieDetails} from '../actions/movieDetails';
import {ActionTypes, API_PARAMS} from '../common/constants';

const getStoredMovies = state => state.storedMovies;
const checkIfMovieExistsInStoredMovies = (movies, id) => movies.find(movie => movie[API_PARAMS.MOVIE_DETAILS.ID] === id);

export function* fetchMovieDetails(action) {
  try {
    const storedMovies = yield select(getStoredMovies);
    let movie = checkIfMovieExistsInStoredMovies(storedMovies, action.payload[API_PARAMS.ID]);

    if (!movie) {
      movie = yield call(serverApi.getMovies, action.payload);
    }

    yield put(populateMovieDetails(movie));
  } catch (error) {
    console.error(error);
  }
}

export function* watchMovieDetails() {
  yield takeEvery(ActionTypes.FETCH_MOVIE_DETAILS, fetchMovieDetails);
}