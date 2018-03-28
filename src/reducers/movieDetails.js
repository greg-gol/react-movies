import {ActionTypes} from '../common/constants';
import _ from 'lodash';

export default function movieDetails(state = {}, action) {
  const newState = _.cloneDeep(state);
  const mappedPayload = _.cloneDeep(action.payload);

  switch(action.type) {
    case ActionTypes.POPULATE_MOVIE_DETAILS:
      mappedPayload.Genre = mappedPayload.Genre.split(',');
      mappedPayload.Actors = mappedPayload.Actors.split(',');
      return {...newState, movieDetails: mappedPayload}
      
    default:
      return {...newState};
  }
}