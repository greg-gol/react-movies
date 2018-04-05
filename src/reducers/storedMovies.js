import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function storedMovies(state = [], action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_STORED_MOVIES:
      return [
        ...newState,  
        action.payload
      ]

    default:
      return newState;
  }
}