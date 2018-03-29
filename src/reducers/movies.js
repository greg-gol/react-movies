import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function movies(state = {}, action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_MOVIES:
      return {...newState, ...action.payload.movies}
      
    default:
      return {...newState};
  }
}