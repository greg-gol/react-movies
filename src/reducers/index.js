import {combineReducers} from 'redux';

import movies from './movies';
import movieDetails from './movieDetails';
import wikiData from './wikiData';
import storedMovies from './storedMovies';
import form from './form';

export default combineReducers({
  movieDetails, 
  movies,
  wikiData,
  storedMovies,
  form
});