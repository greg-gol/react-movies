import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function movieById(state = {}, action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_MOVIE_BY_ID:
      return {...newState, selectedMovie: action.payload}
      
    default:
      return {...newState};
  }
}