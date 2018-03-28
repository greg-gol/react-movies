import {all} from 'redux-saga/effects';

import {watchMovies} from './moviesFetch';
import {watchGoBack, watchGoTo} from './navigation';
import {watchMovieDetails} from './movieFetchDetails';
import {watchWikiData} from './fetchWikiData';

export default function* rootSaga() {
  yield all([
    watchMovies(),
    watchMovieDetails(),
    watchGoBack(),
    watchGoTo(),
    watchWikiData()
  ]);
}