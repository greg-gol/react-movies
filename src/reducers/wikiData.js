import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function wikiData(state = {}, action) {
  const newState = _.cloneDeep(state);

  switch(action.type) {
    case ActionTypes.POPULATE_WIKI_DATA:
      return {...newState, data: action.payload}
      
    default:
      return {...newState};
  }
}