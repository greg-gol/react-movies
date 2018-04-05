import {all} from 'redux-saga/effects';

import {watchMovies} from './moviesFetch';
import {watchNavigation} from './navigation';
import {watchMovieDetails} from './movieFetchDetails';
import {watchWikiData} from './fetchWikiData';
import {watchMoviesAddToStore} from './moviesAddToStore';
import {watchForm} from './form';

export default function* rootSaga() {
  yield all([
    watchMovies(),
    watchMovieDetails(),
    watchMoviesAddToStore(),
    watchNavigation(),
    watchWikiData(),
    watchForm()
  ]);
}