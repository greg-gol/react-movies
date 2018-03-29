import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function movieDetails(state = {}, action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_MOVIE_DETAILS:
      const { Genre, Actors } = action.payload;

      return {
        ...newState,  
        ...action.payload, 
        Genre: Genre.split(','), 
        Actors: Actors.split(',')
      }
      
    default:
      return {...newState};
  }
}