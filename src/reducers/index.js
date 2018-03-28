import {combineReducers} from 'redux';

import movies from './movies';
import movieDetails from './movieDetails';
import wikiData from './wikiData';

export default combineReducers({
  movieDetails, 
  movies,
  wikiData
});