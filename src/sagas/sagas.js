import {all} from 'redux-saga/effects';

import {watchMovies} from './moviesFetch';
import {watchGoBack} from './navigation';
import {watchMovieById} from './movieFetchById';

export default function* rootSaga() {
  yield all([
    watchMovies(),
    watchMovieById(),
    watchGoBack(),
  ]);
}