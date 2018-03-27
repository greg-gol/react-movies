import {combineReducers} from 'redux';

import movies from './movies';
import movieById from './movieById';
import wikiData from './wikiData';

export default combineReducers({
  movieById, 
  movies,
  wikiData
});