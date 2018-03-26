import {combineReducers} from 'redux';

import movies from './movies';
import movieById from './movieById';

export default combineReducers({
  movieById, 
  movies
});