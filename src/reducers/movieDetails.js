import {ActionTypes} from '../common/constants';
import _ from 'lodash';

import {API_PARAMS} from '../common/constants';

const {MOVIE_DETAILS} = API_PARAMS;


export default function movieDetails(state = {}, action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_MOVIE_DETAILS:
      const { Genre, Actors } = action.payload;

      return {  
        ...action.payload, 
        [MOVIE_DETAILS.GENRE]: Genre.split(','), 
        [MOVIE_DETAILS.ACTORS]: Actors.split(',')
      }
      
    default:
      return {...newState};
  }
}