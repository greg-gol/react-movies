import {all} from 'redux-saga/effects';
import {watchMovies} from './moviesFetch';

export default function* rootSaga() {
  yield all([
    watchMovies(),
  ]);
}