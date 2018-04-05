import { ActionTypes } from '../common/constants';
import _ from 'lodash';

import { API_PARAMS } from '../common/constants';

const { MOVIE_DETAILS } = API_PARAMS;
const defaultForm = {
  [MOVIE_DETAILS.TITLE]: {
    value: '',
    touched: false,
    valid: false,
    required: true
  },
  [MOVIE_DETAILS.YEAR]: {
    value: '2000',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.RELEASED]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.RUNTIME]: {
    value: '90',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.COUNTRY]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.LANGUAGE]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.DIRECTOR]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.WRITER]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.ACTORS]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.PLOT]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  },
  [MOVIE_DETAILS.ID]: {
    value: '',
    touched: false,
    valid: false,
    required: true
  },
  [MOVIE_DETAILS.GENRE]: {
    value: '',
    touched: false,
    valid: false,
    required: false
  }
};

export default function form(state = defaultForm, action) {
  const newState = _.cloneDeep(state);

  switch (action.type) {
    case ActionTypes.STORE_INPUT_CHANGE:
      newState[action.payload.key] = action.payload.value;
      return {...newState};

    case ActionTypes.RESET_FORM:
      return {...defaultForm};

    default:
      return {...newState};
  }
}